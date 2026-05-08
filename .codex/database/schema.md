# Database Schema

## users

```ts
User {
  id: string
  name: string
  username: string
  email: string
  avatarUrl?: string
  bio?: string
  location?: string
  role: "user" | "admin" | "cafe_owner"
  createdAt: Date
  updatedAt: Date
}
```

## cafes

```ts
Cafe {
  id: string
  name: string
  slug: string
  handle?: string
  description?: string
  address?: string
  city?: string
  latitude?: number
  longitude?: number
  imageUrl?: string
  logoUrl?: string
  isVerified: boolean
  status: "active" | "pending" | "rejected"
  ownerUserId?: string
  createdAt: Date
  updatedAt: Date
}
```

## products

```ts
Product {
  id: string
  cafeId: string
  name: string
  slug: string
  category: "coffee" | "non_coffee" | "matcha" | "pastry" | "dessert" | "meal" | "other"
  description?: string
  price?: number
  imageUrl?: string
  status: "active" | "pending" | "rejected"
  createdAt: Date
  updatedAt: Date
}
```

## posts

```ts
Post {
  id: string
  userId: string
  cafeId: string
  productId: string
  imageUrl: string
  caption?: string
  rating?: number
  createdAt: Date
  updatedAt: Date
}
```

## upranks

```ts
Uprank {
  id: string
  userId: string
  postId: string
  createdAt: Date
}
```

Constraint:

```txt
unique(userId, postId)
```

## comments

```ts
Comment {
  id: string
  userId: string
  postId: string
  content: string
  createdAt: Date
  updatedAt: Date
}
```

## suggestions

```ts
Suggestion {
  id: string
  userId: string
  type: "cafe" | "product"
  name: string
  cafeId?: string
  notes?: string
  status: "pending" | "approved" | "rejected"
  createdAt: Date
}
```

## saved_posts

```ts
SavedPost {
  id: string
  userId: string
  postId: string
  createdAt: Date
}
```

Constraint:

```txt
unique(userId, postId)
```

## follows

```ts
Follow {
  id: string
  followerUserId: string
  followingUserId?: string
  cafeId?: string
  createdAt: Date
}
```

Use either `followingUserId` or `cafeId`.

## reports

```ts
Report {
  id: string
  reporterUserId: string
  targetType: "post" | "comment" | "cafe" | "product"
  targetId: string
  reason: string
  status: "pending" | "reviewed" | "dismissed"
  createdAt: Date
}
```
