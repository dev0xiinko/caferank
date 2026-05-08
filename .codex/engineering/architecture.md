# Engineering Architecture

## Recommended Stack

```txt
Next.js
TypeScript
Tailwind CSS
shadcn/ui
Supabase
PostgreSQL
Supabase Auth
Supabase Storage
Vercel
```

## App Architecture

```txt
Frontend: Next.js App Router
Auth: Supabase Auth
Database: Supabase Postgres
Storage: Supabase Storage
Hosting: Vercel
```

## Main Modules

```txt
auth
users
cafes
products
posts
upranks
comments
rankings
suggestions
admin
```

## Recommended Folder Structure

```txt
app/
  feed/
  explore/
  create/
  rankings/
  profile/[username]/
  cafe/[slug]/
  product/[id]/
  post/[id]/
  login/
  register/
  admin/

components/
  feed/
  cafe/
  product/
  ranking/
  profile/
  shared/
  layout/

lib/
  supabase/
  queries/
  actions/
  validators/
  utils/

types/
  database.ts
  app.ts
```

## Data Flow

```txt
User action
→ Server action/API route
→ Validate input
→ Check auth
→ Query Postgres
→ Return typed response
→ Update UI
```

## Auth Rules

Authenticated users can:

```txt
Create posts
Uprank posts
Comment
Edit own profile
Suggest cafes/products
```

Unauthenticated users can:

```txt
View public feed
View cafe pages
View product pages
View rankings
```

Admin users can:

```txt
Approve suggestions
Moderate content
Merge duplicates
Verify cafes
```

## Image Upload Flow

```txt
User selects image
Client validates size/type
Upload to Supabase Storage
Get public URL
Save post with image URL
```

## Ranking Update Strategy

MVP:

```txt
Calculate rankings through SQL views or query aggregation.
```

Later:

```txt
Use scheduled jobs to update ranking snapshots.
```

## Recommended Security

```txt
Use RLS policies
Validate all input
Limit upload sizes
Check content ownership before edits/deletes
Use unique constraints for upranks
```
