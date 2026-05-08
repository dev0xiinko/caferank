export const rankShelves = [
  {
    label: "Cebu top 10",
    meta: "Fresh today",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=320&q=80",
  },
  {
    label: "Matcha watch",
    meta: "12 movers",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=320&q=80",
  },
  {
    label: "Pastry board",
    meta: "8 new posts",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=320&q=80",
  },
];

export const posts = [
  {
    id: "spanish-latte",
    username: "mikaela",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    cafe: "Espresso Bay",
    cafeSlug: "espresso-bay",
    location: "Lahug",
    product: "Spanish Latte",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=88",
    rank: "#1 Latte",
    movement: "+4 today",
    upranks: "1,284",
    comments: "84",
    rating: "4.8",
    caption: "Creamy, balanced, and actually worth the queue.",
  },
  {
    id: "matcha-cloud",
    username: "jules",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    cafe: "Kohi Yard",
    cafeSlug: "kohi-yard",
    location: "Banilad",
    product: "Matcha Cloud",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=88",
    rank: "#2 Matcha",
    movement: "+2 today",
    upranks: "842",
    comments: "51",
    rating: "4.7",
    caption: "Earthy matcha, soft foam, not too sweet.",
  },
  {
    id: "butter-croissant",
    username: "renzo",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    cafe: "Morning Fold",
    cafeSlug: "morning-fold",
    location: "IT Park",
    product: "Butter Croissant",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=88",
    rank: "#1 Pastry",
    movement: "New peak",
    upranks: "713",
    comments: "38",
    rating: "4.6",
    caption: "Flaky, glossy, loud crunch. Best before 10 AM.",
  },
];

export const rankingRows = posts.map((post, index) => ({
  rank: index + 1,
  product: post.product,
  cafe: post.cafe,
  category: post.rank.replace("#1 ", "").replace("#2 ", ""),
  score: post.rating,
  upranks: post.upranks,
  image: post.image,
}));

export const cafeMenu = [
  {
    name: "Sea Salt Latte",
    price: "P180",
    rating: "4.6",
    upranks: "421",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "Almond Kouign",
    price: "P145",
    rating: "4.5",
    upranks: "309",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "Iced Mocha",
    price: "P175",
    rating: "4.4",
    upranks: "286",
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "Honey Toast",
    price: "P220",
    rating: "4.3",
    upranks: "243",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=420&q=80",
  },
];
