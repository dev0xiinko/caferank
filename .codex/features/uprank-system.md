# Uprank System

## Concept

Uprank replaces likes.

It is the primary social action in CafeRank.

## Why Uprank?

Likes are generic. Upranks communicate ranking power.

When a user upranks a post, they help the cafe product climb rankings.

## Button Labels

Default:

```txt
▲ Uprank
```

Active:

```txt
▲ Upranked
```

Compact:

```txt
▲ 284
```

## MVP Behavior

```txt
User must be logged in to uprank.
A user can uprank a post only once.
Tapping active uprank removes the uprank.
Uprank count updates instantly.
```

## UI Placement

### Feed

Below product image, left side.

### Grid Overlay

Bottom-left overlay.

### Rankings

Right side of ranking row.

## Animation

Use subtle animation:

```txt
Scale pop on tap
Arrow color change
Count increment
```

## Database Rule

```txt
unique(userId, postId)
```

## Future Expansion

Later, users can uprank:

```txt
Products
Cafes
Comments
Reviews
```

But MVP should only uprank posts.
