# Ranking Logic

## MVP Goal

Rank cafe products based on user ratings, upranks, comments, and recent activity.

## Overall Product Score

Use for all-time rankings.

```txt
productScore = (averageRating * 20) + (uprankCount * 2) + commentCount
```

## Example

```txt
Spanish Latte
Average Rating: 4.8
Upranks: 120
Comments: 32

Score = 4.8 * 20 + 120 * 2 + 32
Score = 368
```

## Weekly Trending Score

Use for trending rankings.

```txt
weeklyScore = (recentUpranks * 3) + (recentComments * 1) + (recentPosts * 2)
```

## Why Two Scores?

```txt
Overall score = long-term quality
Weekly score = current popularity
```

## Ranking Categories

```txt
All Products
Coffee
Matcha
Pastry
Dessert
Meals
Budget
This Week
Near Me
```

## Cafe Score

Cafe score can be calculated from product activity.

```txt
cafeScore = averageProductScore + totalCafeUpranks + totalCafePosts
```

MVP can simplify:

```txt
cafeScore = totalUpranks + totalPosts + averageRating * 20
```

## Prevent Ranking Abuse

Basic protections:

```txt
One uprank per user per post
Require login to uprank
Rate limit actions
Detect repeated spam posts
Admin moderation
```

## Ranking Refresh

MVP:

```txt
Calculate live using SQL aggregation.
```

Later:

```txt
Create ranking_snapshots table updated by cron.
```

## Possible ranking_snapshots Table

```ts
RankingSnapshot {
  id: string
  targetType: "product" | "cafe"
  targetId: string
  category?: string
  city?: string
  score: number
  rank: number
  period: "daily" | "weekly" | "monthly" | "all_time"
  createdAt: Date
}
```
