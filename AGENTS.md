# AGENTS.md — CafeRank

## Project Summary

CafeRank is a mobile-first social ranking app for cafes and cafe products.

The app should feel familiar like Instagram, but instead of likes/hearts, users use **Uprank** to rank cafe product posts.

Main idea:

> Users post cafe products. Other users uprank and comment. Products and cafes rise in rankings based on community activity.

Example:

> A user posts “Spanish Latte from Espresso Bay.”  
> Other users can uprank it, comment on it, and help it climb the rankings.

---

## Core Product Rules

### 1. Mobile First

The mobile version is the main product.

Every screen, component, and flow must be designed for phones first.

Target widths:

```txt
375px
390px
414px
430px
```

Desktop can use a centered mobile-style layout for MVP.

---

### 2. Photo First

CafeRank is visual.

Photos should be the primary content.

Priority:

```txt
Photo first
Product/cafe context second
Ranking/social actions third
```

---

### 3. Uprank Replaces Like

Do not use a heart/like as the primary social action.

Use:

```txt
▲ Uprank
▲ Upranked
▲ 284
```

The Uprank action should feel like it affects rankings, not just engagement.

---

### 4. Cafe + Product Focus

CafeRank should not become a generic social app.

Every major feature should connect back to:

```txt
cafes
products
posts
upranks
comments
rankings
```

---

### 5. Keep the MVP Simple

Build the MVP first.

MVP focus:

```txt
Auth
User profiles
Feed
Create post
Image upload
Upranks
Comments
Cafe profile
Cafe menu tab
Product rankings
Admin approvals
```

Do not build these before MVP is stable:

```txt
DMs
Chat
Payments
Vouchers
Advanced analytics
AI recommendations
Push notifications
Complex creator tools
```

---

## Recommended Tech Stack

Use this stack unless the user explicitly changes it:

```txt
Next.js App Router
TypeScript
Tailwind CSS
shadcn/ui
lucide-react
Supabase Auth
Supabase Postgres
Supabase Storage
Vercel
```

Optional later:

```txt
Prisma
Neon
Cloudflare R2
Auth.js
Clerk
```

---

## App Routes

Recommended MVP routes:

```txt
/
 /feed
 /explore
 /create
 /rankings
 /profile/[username]
 /cafe/[slug]
 /product/[id]
 /post/[id]
 /login
 /register
 /admin
```

---

## Recommended Repo Structure

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
  layout/
  feed/
  cafe/
  product/
  profile/
  ranking/
  post/
  shared/

lib/
  supabase/
  queries/
  actions/
  validators/
  utils/

types/
  database.ts
  app.ts

.codex/
  README.md
  project-brief.md
  product/
  design/
  engineering/
  database/
  flows/
  features/
  business/
  prompts/
  tasks/
  standards/
```

---

## Core Components

Agents should prefer reusable components.

Required component direction:

```txt
PostCard
UprankButton
CafeHeader
CafeTabs
ProductCard
RankingRow
BottomNav
CreatePostForm
CommentList
CommentInput
UserProfileHeader
ImageGrid
```

---

## UI Design System

### Visual Feel

CafeRank should feel:

```txt
Warm
Clean
Mobile-first
Social
Photo-first
Cafe-inspired
Modern
```

### Suggested Palette

```txt
Background: #FAF7F2
Surface: #FFFFFF
Primary Text: #241A16
Muted Text: #8B7E74
Primary Brown: #7B4B2A
Accent Caramel: #C98A4A
Border: #E8DED2
Rank Accent: #2F7D4F
```

### Layout Rules

Use:

```txt
max-w-md mx-auto
sticky bottom navigation
large photos
rounded-2xl cards
44px minimum tap targets
safe-area bottom padding
```

Avoid:

```txt
desktop-first layouts
tiny buttons
cluttered cards
too many actions in the header
large walls of text
```

---

## Main Screen Requirements

## 1. Home Feed

Route:

```txt
/feed
```

The feed should look like Instagram.

Each post must include:

```txt
avatar
username
cafe name
product name
large product photo
uprank button
comment button
save button
uprank count
rating
caption
comment preview
timestamp
```

Post card structure:

```txt
@username
Cafe · Product

[Large Photo]

▲ Uprank   Comment   Save
284 upranks
Rating: 4.8/5
Caption...
View comments
```

---

## 2. Create Post

Route:

```txt
/create
```

Required fields:

```txt
photo
cafe
product
```

Optional fields:

```txt
rating
caption
tags
```

Flow:

```txt
Upload photo
Select/search cafe
Select/search product
Add rating
Add caption
Submit post
```

If cafe/product does not exist:

```txt
Show “Suggest new cafe”
Show “Suggest new product”
Create suggestion with pending status
```

---

## 3. Cafe Profile

Route:

```txt
/cafe/[slug]
```

Should feel like an Instagram profile for cafes.

Header must include:

```txt
cover/cafe photo
logo
cafe name
handle
location
post count
rating
rank
Follow button
Directions button
```

MVP tabs:

```txt
User Posts | Cafe Menu
```

### User Posts Tab

Use 3-column photo grid.

Each grid item should show overlay on hover/tap:

```txt
▲ upranks
💬 comments
```

### Cafe Menu Tab

Use 2-column mobile product grid.

Each product card:

```txt
photo
product name
price
rating
uprank count
```

---

## 4. User Profile

Route:

```txt
/profile/[username]
```

Must include:

```txt
avatar
username
bio
post count
total upranks
cafes visited
edit profile or follow button
```

Tabs:

```txt
Posts
Upranked
Saved
```

Use 3-column photo grid.

---

## 5. Rankings

Route:

```txt
/rankings
```

Rankings should be list-based.

Filter chips:

```txt
All
Coffee
Matcha
Pastry
Dessert
Budget
This Week
Near Me
```

Ranking row:

```txt
#1 [Photo] Spanish Latte
           Espresso Bay
           4.8 · ▲1.2k
```

---

## 6. Explore

Route:

```txt
/explore
```

Must include:

```txt
search bar
category chips
trending grid
top cafes
top products
recently upranked
```

---

## Database Models

Use these core tables.

### users

```ts
User {
  id: string
  name: string
  username: string
  email: string
  avatarUrl?: string
  bio?: string
  location?: string
  role: "user" | "admin" | "cafe_owner"
  createdAt: Date
  updatedAt: Date
}
```

### cafes

```ts
Cafe {
  id: string
  name: string
  slug: string
  handle?: string
  description?: string
  address?: string
  city?: string
  latitude?: number
  longitude?: number
  imageUrl?: string
  logoUrl?: string
  isVerified: boolean
  status: "active" | "pending" | "rejected"
  ownerUserId?: string
  createdAt: Date
  updatedAt: Date
}
```

### products

```ts
Product {
  id: string
  cafeId: string
  name: string
  slug: string
  category: "coffee" | "non_coffee" | "matcha" | "pastry" | "dessert" | "meal" | "other"
  description?: string
  price?: number
  imageUrl?: string
  status: "active" | "pending" | "rejected"
  createdAt: Date
  updatedAt: Date
}
```

### posts

```ts
Post {
  id: string
  userId: string
  cafeId: string
  productId: string
  imageUrl: string
  caption?: string
  rating?: number
  createdAt: Date
  updatedAt: Date
}
```

### upranks

```ts
Uprank {
  id: string
  userId: string
  postId: string
  createdAt: Date
}
```

Required constraint:

```txt
unique(userId, postId)
```

### comments

```ts
Comment {
  id: string
  userId: string
  postId: string
  content: string
  createdAt: Date
  updatedAt: Date
}
```

### suggestions

```ts
Suggestion {
  id: string
  userId: string
  type: "cafe" | "product"
  name: string
  cafeId?: string
  notes?: string
  status: "pending" | "approved" | "rejected"
  createdAt: Date
}
```

---

## Ranking Logic

### Overall Product Score

Use for all-time ranking.

```txt
productScore = (averageRating * 20) + (uprankCount * 2) + commentCount
```

### Weekly Trending Score

Use for trending ranking.

```txt
weeklyScore = (recentUpranks * 3) + (recentComments * 1) + (recentPosts * 2)
```

### MVP Rule

For MVP, ranking can be calculated through SQL aggregation.

Later, add ranking snapshots with a scheduled job.

---

## Auth + Permissions

### Public Users Can

```txt
View public feed
View cafe pages
View product pages
View rankings
View public profiles
```

### Authenticated Users Can

```txt
Create posts
Upload images
Uprank posts
Comment on posts
Save posts
Suggest cafes/products
Edit own profile
Delete own posts/comments
```

### Admins Can

```txt
Approve suggestions
Reject suggestions
Hide posts
Delete comments
Merge duplicates
Verify cafes
Assign cafe owners
```

### Cafe Owners Can Eventually

```txt
Edit claimed cafe profile
Manage menu
View analytics
Create promos
```

---

## Supabase RLS Rules

Agents must not bypass security rules.

Suggested RLS behavior:

```txt
Users can update only their own profile.
Anyone can read active cafes/products/posts.
Authenticated users can create posts.
Users can update/delete only their own posts.
Authenticated users can create/delete their own upranks.
Authenticated users can create comments.
Users can delete their own comments.
Admins can moderate all content.
```

Storage:

```txt
Authenticated users can upload post images.
Public can view uploaded images.
Users can only modify/delete their own uploaded images.
```

---

## Coding Standards

### TypeScript

Use strict TypeScript.

Avoid:

```txt
any
large untyped objects
duplicated types
```

Prefer:

```txt
explicit interfaces
generated Supabase types
zod validation
typed server actions
```

---

### Components

Rules:

```txt
small components
single responsibility
typed props
reusable layout
clear names
```

---

### Server Logic

Do not put database mutation logic directly inside UI components.

Prefer:

```txt
lib/actions/
lib/queries/
lib/validators/
```

---

### Validation

Use validation for:

```txt
caption length
rating range
comment content
image file type
image file size
cafeId
productId
username
```

Recommended:

```txt
zod
```

---

### Error Handling

Every mutation should handle:

```txt
loading
success
error
unauthorized
empty state
```

Use clear user-facing errors:

```txt
Please log in first.
Post not found.
You already upranked this post.
Unable to upload image.
```

---

## UX States

Agents must include these states for important screens:

```txt
loading
empty
error
success
unauthenticated
```

Examples:

### Empty Feed

```txt
No posts yet.
Be the first to rank a cafe product.
[Create Post]
```

### Empty Cafe Menu

```txt
No menu items yet.
Suggest the first product.
[Suggest Product]
```

### Empty Rankings

```txt
No rankings yet.
Uprank products to build the leaderboard.
```

---

## Image Handling Rules

CafeRank is image-heavy.

Agents must optimize image handling.

Rules:

```txt
Use square images for MVP
Use object-cover
Lazy load images
Compress uploads where possible
Limit image size
Use placeholders/skeletons
Do not load unnecessary full-resolution images
```

Recommended MVP image ratio:

```txt
1:1 square
```

---

## Performance Rules

```txt
Paginate feed
Load 10 posts first
Do not fetch all comments in feed
Fetch only preview comments
Use skeleton loaders
Avoid heavy client components
Use server components when useful
Use optimistic UI for upranks
```

---

## Build Order for Agents

When implementing from scratch, follow this order:

```txt
1. Project setup
2. Theme and app shell
3. Bottom navigation
4. Mock mobile UI
5. Auth
6. Database schema
7. Image upload
8. Create post
9. Feed from database
10. Uprank system
11. Comments
12. Cafe profile
13. Product detail
14. Rankings
15. Admin suggestions
16. Polish and testing
```

---

## Do Not Do

Agents should not:

```txt
Replace Uprank with Like
Build desktop-first layouts
Overbuild analytics early
Add payments before MVP
Add chat/DMs before MVP
Ignore mobile safe area
Use tiny tap targets
Allow messy duplicate cafes/products without suggestions/approval
Put business logic directly in UI components
Skip validation
Skip RLS/security assumptions
```

---

## Acceptance Criteria for MVP

The MVP is acceptable when:

```txt
A user can sign up and log in.
A user can create a profile.
A user can create a cafe product post with an image.
A user can uprank a post.
A user can comment on a post.
A feed displays posts.
A cafe page shows User Posts and Cafe Menu tabs.
A user profile shows a photo grid.
A rankings page shows ranked products.
Cafe/product suggestions can be approved by admin.
The app looks good on mobile.
```

---

## Agent Behavior Rules

When editing code:

```txt
Read existing files before changing architecture.
Preserve existing user work.
Prefer small focused changes.
Do not rewrite unrelated code.
Keep components typed and reusable.
Update markdown docs when changing product logic.
Explain important tradeoffs briefly.
```

When unsure:

```txt
Choose the simplest MVP-friendly implementation.
Prefer mobile-first behavior.
Prefer clean data over fast messy data.
Prefer photo-first UI.
Prefer server-side safety and validation.
```

---

## Final Product Vision

CafeRank should answer:

```txt
What cafe should I visit?
What drink should I order?
What pastry is actually worth it?
What cafe products are trending near me?
Which cafe has the best matcha, latte, or dessert?
```

Long-term vision:

> CafeRank becomes the community-powered ranking layer for cafes and cafe products.