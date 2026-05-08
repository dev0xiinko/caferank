# Screen Specifications

## /feed

Purpose: main social feed.

Content:

```txt
Header
Post feed
Bottom navigation
```

Each post:

```txt
Avatar
Username
Cafe name
Product name
Photo
Uprank
Comment
Save
Rating
Caption
Comment preview
```

## /create

Purpose: create cafe product post.

Fields:

```txt
Photo upload
Cafe search/select
Product search/select
Rating
Caption
Tags
Submit
```

Rules:

```txt
Cafe is required
Product is required
Photo is required
Caption is optional
Rating is optional but recommended
```

## /cafe/[slug]

Purpose: cafe profile.

Content:

```txt
Cafe header
Stats
Action buttons
Tabs
User Posts grid
Cafe Menu grid
```

Tabs:

```txt
User Posts
Cafe Menu
```

## /profile/[username]

Purpose: user profile.

Content:

```txt
Avatar
Username
Bio
Stats
Edit profile / Follow
Tabs
Photo grid
```

Tabs:

```txt
Posts
Upranked
Saved
```

## /rankings

Purpose: ranked cafe products.

Content:

```txt
Header
Filter chips
Ranking list
```

Filters:

```txt
All
Coffee
Matcha
Pastry
Dessert
Budget
This Week
```

## /explore

Purpose: discover cafes/products.

Content:

```txt
Search bar
Category chips
Trending grid
Top cafes
Top products
Recently upranked
```

## /post/[id]

Purpose: post detail.

Content:

```txt
Large image
User info
Cafe/product info
Uprank/comment/save
Caption
Comments
Comment input
```

## /product/[id]

Purpose: product detail.

Content:

```txt
Product image
Product name
Cafe name
Rating
Upranks
Rank
User posts
Comments/reviews
Similar products
```
