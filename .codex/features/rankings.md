# Rankings Feature

## Purpose

Show the best cafe products based on community activity.

## Route

```txt
/rankings
```

## Main Ranking Types

```txt
Top Products
Trending This Week
Most Upranked
Best Coffee
Best Matcha
Best Pastry
Best Dessert
Best Budget Drinks
Top Cafes in Cebu
```

## Mobile Layout

Use vertical list.

Ranking row:

```txt
#1 [Photo] Spanish Latte
           Espresso Bay
           4.8 · ▲1.2k
```

## Filters

Use horizontal chips:

```txt
All
Coffee
Matcha
Pastry
Dessert
Budget
This Week
Near Me
```

## Ranking Logic

Overall:

```txt
productScore = (averageRating * 20) + (uprankCount * 2) + commentCount
```

Weekly:

```txt
weeklyScore = (recentUpranks * 3) + (recentComments * 1) + (recentPosts * 2)
```

## Empty State

```txt
No rankings yet.
Uprank products to build the leaderboard.
```

## Future Features

```txt
City rankings
Cafe rankings
Creator rankings
Monthly badges
Ranking history
```
