# Supabase RLS Policy Notes

## Goal

Protect user data and prevent unauthorized actions.

## users

Rules:

```txt
Users can read public profiles.
Users can update only their own profile.
Admins can read/update all profiles.
```

## posts

Rules:

```txt
Anyone can read active posts.
Authenticated users can create posts.
Users can update/delete their own posts.
Admins can hide/delete any post.
```

## upranks

Rules:

```txt
Authenticated users can read upranks.
Authenticated users can create their own upranks.
Authenticated users can delete their own upranks.
Users cannot create upranks for other users.
```

## comments

Rules:

```txt
Anyone can read comments.
Authenticated users can create comments.
Users can update/delete their own comments.
Admins can delete any comment.
```

## cafes

Rules:

```txt
Anyone can read active cafes.
Authenticated users can create pending cafe suggestions.
Admins can approve/edit cafes.
Cafe owners can edit claimed verified cafe profiles.
```

## products

Rules:

```txt
Anyone can read active products.
Authenticated users can create pending product suggestions.
Admins can approve/edit products.
Cafe owners can manage products for claimed cafes.
```

## suggestions

Rules:

```txt
Authenticated users can create suggestions.
Users can read their own suggestions.
Admins can read/update all suggestions.
```

## saved_posts

Rules:

```txt
Authenticated users can create saved posts for themselves.
Users can read/delete their own saved posts.
```

## Storage

Image upload rules:

```txt
Authenticated users can upload post images.
Users can only modify their own uploaded images.
Public can view images.
Limit file type to images.
Limit file size.
```
