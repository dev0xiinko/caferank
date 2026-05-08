# CafeRank

CafeRank is a mobile-first social ranking app for cafes and cafe products.

It feels like Instagram, but instead of likes, users use **Uprank** to rank cafe product posts.

Users can post cafe products, upload photos, comment, uprank posts, browse cafe profiles, view cafe menus, and discover the most ranked drinks, pastries, and cafe items near them.

---

## One-Liner

> CafeRank helps people discover the most upranked cafe products near them.

---

## Concept

Most review platforms rank cafes as businesses.

CafeRank ranks the actual products people order.

Example:

> A user posts about the **Spanish Latte** from **Espresso Bay**.  
> Other users can uprank it, comment on it, and help it climb the rankings.

Instead of only asking:

```txt
What cafe should I visit?
```

CafeRank helps answer:

```txt
What drink should I order?
What pastry is actually worth it?
What cafe product is trending right now?
Which cafe has the best matcha, latte, or dessert?
```

---

## Core Features

### Users

- Create an account
- Create and edit profile
- Upload cafe product posts
- Uprank posts
- Comment on posts
- Save posts
- View user profiles
- Browse rankings

### Posts

- Product photo
- Cafe name
- Product name
- Rating
- Caption
- Upranks
- Comments

### Cafes

- Cafe profile page
- Cafe header
- Location
- Rating
- Rank
- User Posts tab
- Cafe Menu tab

### Products

- Product page
- Product image
- Product rating
- Uprank count
- Related user posts
- Ranking position

### Rankings

- Top cafe products
- Trending this week
- Most upranked
- Best coffee
- Best matcha
- Best pastries
- Best desserts

---

## Main Product Hook

CafeRank is not just a cafe review app.

The hook is:

```txt
Find the most upranked cafe products near you.
```

The main social action is:

```txt
▲ Uprank
```

Not:

```txt
❤️ Like
```

---

## UI Direction

CafeRank is designed mobile-first.

The UI should feel like:

```txt
Instagram-style social feed
Product Hunt-style ranking
Warm cafe discovery app
```

### Design Principles

```txt
Mobile-first
Photo-first
Thumb-friendly
Warm cafe-inspired
Clean and minimal
Ranking-driven
```

### Main Mobile Navigation

```txt
Home
Explore
Create
Rankings
Profile
```

### Main Screens

```txt
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

## Cafe Profile Layout

Cafe profiles should feel like Instagram profiles for cafes.

### Header

```txt
Cafe photo/logo
Cafe name
Handle
Location
Posts
Rating
Rank
Follow button
Directions button
```

### Tabs

```txt
User Posts | Cafe Menu
```

### User Posts Tab

Instagram-style 3-column photo grid.

```txt
[img] [img] [img]
[img] [img] [img]
[img] [img] [img]
```

### Cafe Menu Tab

Photo-first product grid.

```txt
[Spanish Latte] [Matcha Latte]
[Croissant]     [Cheesecake]
```

---

## Recommended Tech Stack

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

---

## Suggested Folder Structure

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

AGENTS.md
README.md
```

---

## Core Components

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

## Data Models

### User

```ts
type User = {
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

### Cafe

```ts
type Cafe = {
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

### Product

```ts
type Product = {
  id: string
  cafeId: string
  name: string
  slug: string
  category:
    | "coffee"
    | "non_coffee"
    | "matcha"
    | "pastry"
    | "dessert"
    | "meal"
    | "other"
  description?: string
  price?: number
  imageUrl?: string
  status: "active" | "pending" | "rejected"
  createdAt: Date
  updatedAt: Date
}
```

### Post

```ts
type Post = {
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

### Uprank

```ts
type Uprank = {
  id: string
  userId: string
  postId: string
  createdAt: Date
}
```

Required database constraint:

```txt
unique(userId, postId)
```

### Comment

```ts
type Comment = {
  id: string
  userId: string
  postId: string
  content: string
  createdAt: Date
  updatedAt: Date
}
```

---

## Ranking Logic

### Overall Product Score

Used for all-time product rankings.

```txt
productScore = (averageRating * 20) + (uprankCount * 2) + commentCount
```

### Weekly Trending Score

Used for trending rankings.

```txt
weeklyScore = (recentUpranks * 3) + (recentComments * 1) + (recentPosts * 2)
```

### Ranking Categories

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

---

## MVP Scope

Build this first:

```txt
Authentication
User profile
Home feed
Create post
Image upload
Uprank system
Comments
Cafe profile
Cafe menu tab
Product detail
Rankings page
Admin approval for suggestions
```

Do not build these first:

```txt
DMs
Chat
Payments
Voucher redemption
Advanced analytics
AI recommendations
Push notifications
Complex creator tools
```

---

## MVP Build Order

```txt
1. Project setup
2. Theme and app shell
3. Bottom navigation
4. Mock mobile UI
5. Authentication
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

## Setup Guide

### 1. Clone the repository

```bash
git clone <repo-url>
cd caferank
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

Create `.env.local`:

```bash
cp .env.example .env.local
```

Add your Supabase keys:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

### 4. Run the development server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Optional later:

```env
NEXT_PUBLIC_APP_URL=
SUPABASE_STORAGE_BUCKET=
```

---

## Supabase Setup

CafeRank needs:

```txt
Supabase Auth
Postgres database
Storage bucket for post images
RLS policies
```

Recommended storage bucket:

```txt
post-images
```

Recommended public image policy:

```txt
Public read
Authenticated upload
Owner update/delete
```

---

## Security Rules

Use Supabase RLS.

Basic rules:

```txt
Anyone can read active cafes, products, posts, rankings, and public profiles.
Authenticated users can create posts.
Users can update/delete only their own posts.
Authenticated users can create/delete their own upranks.
Authenticated users can create comments.
Users can delete only their own comments.
Admins can moderate all content.
```

---

## Admin Features

Admin users should be able to:

```txt
Approve suggested cafes
Approve suggested products
Reject suggestions
Hide bad posts
Delete harmful comments
Merge duplicate cafes/products
Verify cafe owners
```

---

## Business Model

CafeRank should be free for regular users.

Revenue comes from cafes.

### Main Revenue Streams

```txt
Verified cafe profiles
Featured cafe placements
Sponsored product campaigns
Cafe analytics dashboard
Vouchers and deals
Ranking badges
Product launch campaigns
```

### Suggested Pricing

```txt
Free
- Listed cafe page
- User posts
- Community ranking

Basic — ₱299/month
- Claim cafe page
- Edit cafe info
- Add official photos
- Manage menu/products

Growth — ₱799/month
- Everything in Basic
- Analytics dashboard
- Post promos
- Customer feedback summary

Premium — ₱1,499/month
- Everything in Growth
- Featured placement credits
- Competitor insights
- Campaign reports
- Ranking badge kit
```

---

## Product Rules

```txt
Mobile-first always.
Photo-first always.
Uprank replaces Like.
Cafe/product discovery is the core.
Do not overbuild before MVP.
Keep cafe/product data clean.
Use suggestions and admin approval for new cafes/products.
```

---

## Development Standards

```txt
Use strict TypeScript.
Use reusable components.
Keep server logic out of UI components.
Validate inputs with zod or equivalent.
Use loading, empty, error, and success states.
Optimize images.
Paginate feed.
Do not fetch all comments in the feed.
Use optimistic UI for upranks.
```

---

## Acceptance Criteria

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

## Long-Term Vision

CafeRank becomes the community-powered ranking layer for cafes and cafe products.

It should help users answer:

```txt
What cafe should I visit?
What drink should I order?
What pastry is actually worth it?
What cafe products are trending near me?
Which cafe has the best matcha, latte, or dessert?
```

---

## License

To be decided.