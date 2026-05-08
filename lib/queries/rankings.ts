import "server-only";

import { createClient } from "@/lib/supabase/server";
import type { ProductCategory, ProductRanking } from "@/types/app";

interface RankingOptions {
  category?: ProductCategory;
  limit?: number;
  period?: "all_time" | "weekly";
}

export async function getProductRankings({
  category,
  limit = 20,
  period = "all_time",
}: RankingOptions = {}): Promise<ProductRanking[]> {
  const supabase = await createClient();
  const view = period === "weekly" ? "weekly_product_rankings" : "product_rankings";
  const scoreColumn = period === "weekly" ? "weekly_score" : "score";

  let query = supabase
    .from(view)
    .select("*")
    .order(scoreColumn, { ascending: false })
    .limit(limit);

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Unable to load rankings.");
  }

  return (data ?? []).map((row) => ({
    productId: row.product_id,
    cafeId: row.cafe_id,
    productName: row.product_name,
    productSlug: row.product_slug,
    category: row.category,
    cafeName: row.cafe_name,
    cafeSlug: row.cafe_slug,
    postCount: "post_count" in row ? row.post_count : row.recent_post_count,
    averageRating: "average_rating" in row ? row.average_rating : 0,
    uprankCount: "uprank_count" in row ? row.uprank_count : row.recent_uprank_count,
    commentCount: "comment_count" in row ? row.comment_count : row.recent_comment_count,
    score: "score" in row ? row.score : row.weekly_score,
  }));
}
