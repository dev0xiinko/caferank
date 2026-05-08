# Create Post Feature

## Purpose

Allow users to create a cafe product post.

## Route

```txt
/create
```

## Required Data

```txt
User
Cafe
Product
Photo
```

## Optional Data

```txt
Caption
Rating
Tags
```

## Form Fields

```txt
Photo upload
Cafe search/select
Product search/select
Rating
Caption
Tags
Submit button
```

## Mobile Form Rule

Use one field per section.

Avoid crowding.

## Flow

```txt
1. Upload photo
2. Select cafe
3. Select product
4. Add rating
5. Add caption
6. Submit
```

## Cafe/Product Not Found

Show:

```txt
+ Suggest new cafe
+ Suggest new product
```

Suggestions should be pending until admin approval.

## Validation

```txt
Photo is required
Cafe is required
Product is required
Rating must be within allowed range
Caption has max length
User must be logged in
```

## After Submit

```txt
Save post
Redirect to post detail or feed
Show success toast
Update cafe user posts tab
Update product ranking calculations
```
