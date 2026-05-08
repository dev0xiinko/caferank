# Cafe Profile Feature

## Purpose

Cafe profiles help users discover cafe posts and menu items.

The layout should feel like Instagram for cafes.

## Route

```txt
/cafe/[slug]
```

## Header

Include:

```txt
Cover photo
Logo
Cafe name
Handle
Location
Post count
Rating
Rank
Follow button
Directions button
Share button
```

## MVP Buttons

Use only:

```txt
Follow
Directions
```

## Tabs

MVP:

```txt
User Posts | Cafe Menu
```

Future:

```txt
Posts | Menu | Rankings | Reviews
```

## User Posts Tab

Use 3-column Instagram grid.

Each photo opens post detail.

Grid overlay:

```txt
▲ upranks
💬 comments
```

## Cafe Menu Tab

Use 2-column mobile grid.

Product card:

```txt
Photo
Product name
Price
Rating
Upranks
```

## Empty States

### No posts

```txt
No posts from this cafe yet.
Post your first cafe find.
```

### No menu

```txt
No menu items yet.
Suggest the first product.
```

## Data Needed

```txt
Cafe
Products
Posts
Aggregated ratings
Aggregated upranks
```
