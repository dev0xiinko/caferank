# CafeRank Backend Design

## Backend Shape

CafeRank uses Supabase as the primary backend and Next.js as the backend-for-frontend layer.

```txt
Next.js App Router
-> Server Components for reads
-> Server Actions for mutations
-> Data access modules in lib/queries and lib/actions
-> Supabase Auth, Postgres, Storage, and RLS
```

For MVP, avoid a separate REST API unless a client-only workflow needs one. Server Components should read through query modules directly, and Client Components should mutate through Server Actions.

## Source Of Truth

Postgres owns:

```txt
profiles
cafes
products
posts
upranks
comments
suggestions
saved_posts
follows
reports
ranking views
```

Supabase Auth owns identity. The `profiles.id` value matches `auth.users.id`.

Supabase Storage owns post images through the `post-images` bucket.

## Data Access Rules

Use a small Data Access Layer:

```txt
lib/supabase/
  client.ts
  server.ts
  proxy.ts

lib/queries/
  feed.ts
  cafes.ts
  products.ts
  rankings.ts
  profiles.ts

lib/actions/
  posts.ts
  upranks.ts
  comments.ts
  suggestions.ts
  admin.ts

lib/validators/
  posts.ts
  comments.ts
  suggestions.ts
  profiles.ts
```

Rules:

```txt
Queries return safe DTOs, not raw database records.
Actions validate input before mutation.
Actions re-check auth and ownership.
Actions return ApiResponse<T>.
Database RLS remains the final enforcement layer.
```

## Auth

Use `@supabase/ssr`.

Required env:

```txt
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

Use `proxy.ts` to refresh auth cookies. In server-side protection checks, prefer verified auth claims over trusting an unverified session cookie.

## Mutation Pattern

Server Actions should stay thin:

```txt
parse input
call Supabase server client
perform auth or role checks
mutate
revalidate affected paths
return ApiResponse
```

Never put database writes directly inside UI components.

## Core MVP Workflows

### Create Post

```txt
authenticated user
client validates selected image
upload image to post-images/{userId}/...
submit image path or public URL, cafeId, productId, rating, caption
server validates IDs and rating
insert post
revalidate feed, profile, cafe, product, rankings
```

### Uprank

```txt
authenticated user
toggle by postId
insert uprank when not present
delete uprank when present
unique(user_id, post_id) prevents duplicates
revalidate feed, post, rankings
```

### Comment

```txt
authenticated user
validate content length
insert comment
delete only own comment or admin
feed only loads a small preview
```

### Suggestions

```txt
authenticated user suggests cafe/product
suggestion starts pending
admin approves into cafes/products or rejects
```

## Ranking MVP

Use live SQL views first:

```txt
product_rankings:
  (average_rating * 20) + (uprank_count * 2) + comment_count

weekly_product_rankings:
  (recent_upranks * 3) + (recent_comments * 1) + (recent_posts * 2)
```

Later, add `ranking_snapshots` and a scheduled job when traffic or query cost justifies it.

## Security

Backend security layers:

```txt
1. zod validation
2. server-side auth and role checks
3. ownership checks
4. Supabase RLS policies
5. database constraints
```

Important constraints:

```txt
profiles.username unique
cafes.slug unique
products unique(cafe_id, slug)
upranks unique(user_id, post_id)
saved_posts unique(user_id, post_id)
ratings between 1 and 5
post images stored under the owning user ID
```

## Admin

Admin is role-based through `profiles.role = 'admin'`.

Admins can:

```txt
approve or reject suggestions
activate/reject cafes and products
hide posts
moderate comments
verify cafes
assign cafe owners
```

## Implementation Order

```txt
1. Supabase schema and RLS
2. Supabase SSR client utilities
3. validators and shared response types
4. auth/profile actions
5. post/image upload actions
6. feed and ranking queries
7. uprank/comment actions
8. admin suggestion actions
```
