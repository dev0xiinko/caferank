# Codex Implementation Prompt

Use this when asking a coding agent to build CafeRank.

```txt
You are building CafeRank, a mobile-first social ranking app for cafes and cafe products.

The product should feel like Instagram, but the heart/like action is replaced with an “Uprank” action using an up arrow. Users can create posts about cafe products, upload photos, uprank posts, comment, view cafe profiles, browse cafe menu items, and view rankings.

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- Supabase Auth
- Supabase Postgres
- Supabase Storage

Follow these rules:
- Mobile-first design
- Photo-first layouts
- Sticky bottom navigation
- Warm cafe color palette
- Clean and reusable components
- Strong TypeScript types
- Supabase RLS-compatible architecture
- No messy hardcoded business logic inside components

Build in this order:
1. Project setup
2. Layout and bottom navigation
3. Auth screens
4. Database types
5. Feed page with mock data
6. Post card component
7. Uprank button
8. Create post form
9. Cafe profile page with User Posts and Cafe Menu tabs
10. User profile page
11. Rankings page
12. Supabase integration
13. Admin suggestion approval

Important components:
- PostCard
- UprankButton
- CafeHeader
- CafeTabs
- ProductCard
- RankingRow
- BottomNav
- CreatePostForm

The MVP should prioritize:
- Posts
- Upranks
- Comments
- Cafe profiles
- Cafe menu tab
- Rankings

Do not build:
- DMs
- Chat
- Complex analytics
- Payments
- Voucher system
- AI features
until the MVP is stable.
```
