# Mobile-First Design

## Principle

The mobile version is the product.

Desktop is only an expansion.

## Design Rules

```txt
Photo-first
Thumb-friendly
Sticky bottom navigation
Minimal typing
Large tap targets
Fast posting
Clean layout
No clutter
```

## Target Widths

```txt
375px
390px
414px
430px
```

## App Shell

```txt
Top Header
Main Content
Sticky Bottom Navigation
```

## Bottom Navigation

Recommended tabs:

```txt
Home
Explore
Create
Rankings
Profile
```

The Create button should be visually emphasized.

## Tap Targets

Minimum tap target:

```txt
44px x 44px
```

Important thumb-friendly actions:

```txt
Uprank
Comment
Save
Create Post
Tabs
Bottom nav
```

## Home Feed

The feed should look like Instagram.

Post card structure:

```txt
Avatar + username
Cafe · Product
Large photo
Uprank / Comment / Save
Uprank count
Rating
Caption
Comment preview
Timestamp
```

## Image Ratio

Use square photos for MVP:

```txt
1:1
```

This works well for:

```txt
Feed
Cafe profile grid
User profile grid
Menu cards
```

## Cafe Profile

Cafe profile structure:

```txt
Cover / cafe photo
Logo
Cafe name
Handle
Location
Stats
Follow / Directions
Tabs
Grid content
```

MVP tabs:

```txt
User Posts | Cafe Menu
```

## Cafe Menu

Use a 2-column grid on mobile.

Product card:

```txt
Photo
Product name
Price
Rating
Upranks
```

## Rankings

Use a vertical list.

Ranking row:

```txt
#1 [Photo] Spanish Latte
           Espresso Bay
           4.8 · ▲1.2k
```

## Mobile Performance

```txt
Lazy load images
Compress uploads
Use skeleton loading
Load 10 posts first
Paginate feed
Do not load all comments by default
```

## Final Check

Before adding a feature, ask:

```txt
Can users do this with one thumb?
Is the photo still the focus?
Is Uprank obvious?
Is this fast on mobile?
Is this easy to understand?
```
