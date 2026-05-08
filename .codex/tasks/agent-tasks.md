# Agent Tasks

Use this as a task list for Codex or another coding agent.

## Task 1 — Create Project Foundation

Build the CafeRank Next.js project using TypeScript, Tailwind, shadcn/ui, and lucide-react.

Acceptance criteria:

```txt
Project runs locally
Mobile-first layout works
Theme colors are configured
Bottom nav exists
```

## Task 2 — Build Mock UI

Build mobile-first mock screens using static data.

Screens:

```txt
/feed
/create
/cafe/espresso-bay
/profile/adrian
/rankings
/explore
```

Acceptance criteria:

```txt
Looks polished on 390px width
Feed resembles Instagram
Uprank replaces like
Cafe profile has User Posts and Cafe Menu tabs
```

## Task 3 — Add Supabase Auth

Implement login/register/logout and protected routes.

Acceptance criteria:

```txt
User can sign up
User can log in
User can log out
Create page requires auth
Profile is linked to user
```

## Task 4 — Add Database Schema

Create tables and types for:

```txt
users
cafes
products
posts
upranks
comments
suggestions
saved_posts
```

Acceptance criteria:

```txt
Tables exist
Relationships work
RLS policies are added
Types are generated
```

## Task 5 — Implement Create Post

Build real post creation with image upload.

Acceptance criteria:

```txt
User uploads photo
Selects cafe/product
Adds caption/rating
Post saves to database
Post appears in feed
```

## Task 6 — Implement Upranks

Build real uprank behavior.

Acceptance criteria:

```txt
User can uprank
User can remove uprank
Duplicate upranks are prevented
Count updates correctly
```

## Task 7 — Implement Comments

Build comments for posts.

Acceptance criteria:

```txt
User can comment
Comments appear on post detail
Feed shows preview comments
```

## Task 8 — Implement Cafe Profile

Build cafe profile using real data.

Acceptance criteria:

```txt
Cafe header loads
User Posts tab shows posts
Cafe Menu tab shows products
Tabs work on mobile
```

## Task 9 — Implement Rankings

Build rankings page using SQL aggregation.

Acceptance criteria:

```txt
Top products display
Filters work
Scores are calculated
Mobile layout is clean
```

## Task 10 — Admin Suggestions

Build simple admin approval flow.

Acceptance criteria:

```txt
Admin can view pending suggestions
Admin can approve/reject cafes/products
Approved items become active
```
