# Admin Flows

## Admin Purpose

Admin tools keep the data clean and safe.

## Main Admin Actions

```txt
Approve suggested cafes
Approve suggested products
Reject invalid suggestions
Merge duplicate cafes/products
Hide bad posts
Delete harmful comments
Verify cafe owners
Manage featured placements
```

## Cafe Suggestion Approval Flow

```txt
User suggests cafe
Admin reviews details
Admin checks duplicate cafes
Admin approves or rejects
If approved, cafe becomes active
```

## Product Suggestion Approval Flow

```txt
User suggests product
Admin checks if cafe exists
Admin checks duplicate products
Admin approves or rejects
If approved, product becomes active
```

## Duplicate Merge Flow

```txt
Admin sees duplicate cafe/product
Admin selects canonical record
Admin moves posts/products to canonical record
Admin archives duplicate
```

## Content Moderation Flow

```txt
User reports post/comment
Admin reviews report
Admin dismisses or takes action
Action may be hide/delete/warn
```

## Cafe Claim Flow

```txt
Cafe owner requests claim
Admin verifies ownership
Admin assigns ownerUserId
Cafe becomes verified
Owner can edit cafe profile/menu
```

## Featured Placement Flow

```txt
Cafe requests campaign
Admin creates featured placement
Placement appears on Explore/Rankings
Campaign has start/end date
Admin reviews performance
```
