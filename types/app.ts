export type UserRole = "user" | "admin" | "cafe_owner";

export type RecordStatus = "active" | "pending" | "rejected";

export type ProductCategory =
  | "coffee"
  | "non_coffee"
  | "matcha"
  | "pastry"
  | "dessert"
  | "meal"
  | "other";

export type SuggestionType = "cafe" | "product";

export interface PublicProfile {
  id: string;
  name: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  location?: string;
  role: UserRole;
}

export interface CafeSummary {
  id: string;
  name: string;
  slug: string;
  handle?: string;
  city?: string;
  imageUrl?: string;
  logoUrl?: string;
  isVerified: boolean;
}

export interface ProductSummary {
  id: string;
  cafeId: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price?: number;
  imageUrl?: string;
}

export interface FeedPost {
  id: string;
  imageUrl: string;
  caption?: string;
  rating?: number;
  createdAt: string;
  author: PublicProfile;
  cafe: CafeSummary;
  product: ProductSummary;
  uprankCount: number;
  commentCount: number;
  viewerHasUpranked: boolean;
  previewComments: CommentPreview[];
}

export interface CommentPreview {
  id: string;
  content: string;
  createdAt: string;
  author: Pick<PublicProfile, "id" | "name" | "username" | "avatarUrl">;
}

export interface ProductRanking {
  productId: string;
  cafeId: string;
  productName: string;
  productSlug: string;
  category: ProductCategory;
  cafeName: string;
  cafeSlug: string;
  postCount: number;
  averageRating: number;
  uprankCount: number;
  commentCount: number;
  score: number;
}
