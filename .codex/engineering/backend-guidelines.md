# Backend Guidelines

## Backend Style

For MVP, use Supabase and server actions/API routes.

## Core Backend Responsibilities

```txt
Auth checks
Post creation
Image upload references
Uprank creation/removal
Comment creation
Cafe/product lookup
Suggestion creation
Ranking queries
Admin approval
```

## Validation

Use validation for all inputs.

Recommended:

```txt
zod
```

Validate:

```txt
username
caption length
rating range
cafeId
productId
imageUrl
comment content
```

## Rating Rules

MVP rating:

```txt
1 to 5 stars
```

Alternative later:

```txt
0.0 to 10.0 score
```

## Uprank Rules

```txt
One user can uprank one post once.
Tapping active uprank removes it.
Uprank count must update immediately in UI.
```

Database unique rule:

```txt
unique(user_id, post_id)
```

## Comment Rules

```txt
Authenticated users only
Comment cannot be empty
Limit comment length
Allow delete only by owner/admin
```

## Suggestion Rules

If cafe/product does not exist:

```txt
Create suggestion
Mark status as pending
Admin approves/rejects
```

## Admin Rules

Admin access should be role-based.

Admin can:

```txt
Approve cafe
Approve product
Reject suggestion
Hide post
Delete comment
Merge duplicate cafe/product
```

## API Response Pattern

Use consistent response shape:

```ts
{
  success: boolean
  data?: unknown
  error?: string
}
```

## Error Handling

Do not expose sensitive server errors.

Return user-friendly errors:

```txt
Please log in first.
Post not found.
You already upranked this post.
Unable to upload image.
```
