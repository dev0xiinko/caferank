# Frontend Guidelines

## General

Use:

```txt
Next.js App Router
TypeScript
Tailwind CSS
shadcn/ui
lucide-react
```

## Design Priority

```txt
Mobile-first first
Desktop second
Photo-first always
```

## Component Rules

Components should be:

```txt
Small
Reusable
Typed
Accessible
Responsive
```

## Naming

Use clear component names:

```txt
PostCard
UprankButton
CafeHeader
CafeTabs
ProductCard
RankingRow
BottomNav
CreatePostForm
```

## Loading States

Use skeletons for:

```txt
Feed posts
Cafe profile
Menu grid
Rankings list
Product detail
```

## Error States

Every server action or mutation should show:

```txt
Success toast
Error toast
Loading state
```

## Image Handling

Use optimized image components when possible.

Rules:

```txt
Use square image containers for grids
Use object-cover
Use lazy loading
Show fallback image if missing
```

## Feed Rules

```txt
Load paginated posts
Show newest or ranked posts
Do not fetch all comments
Show 1-2 preview comments only
```

## Accessibility

```txt
Use semantic buttons
Add aria-label for icon buttons
Keep contrast readable
Make tap targets at least 44px
Do not rely only on color for state
```

## Mobile Layout

Use:

```txt
max-w-md mx-auto
sticky bottom nav
safe-area padding
```

## Desktop Layout

For MVP, desktop can use centered mobile layout:

```txt
max-w-md mx-auto
```

Later:

```txt
sidebar + center feed + right discovery panel
```
