import "server-only";

import { createClient } from "@/lib/supabase/server";
import type { CafeSummary, ProductSummary } from "@/types/app";

export async function searchActiveCafes(term: string): Promise<CafeSummary[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cafes")
    .select("id,name,slug,handle,city,image_url,logo_url,is_verified")
    .eq("status", "active")
    .ilike("name", `%${term.trim()}%`)
    .order("name")
    .limit(10);

  if (error) {
    throw new Error("Unable to search cafes.");
  }

  return (data ?? []).map((cafe) => ({
    id: cafe.id,
    name: cafe.name,
    slug: cafe.slug,
    handle: cafe.handle ?? undefined,
    city: cafe.city ?? undefined,
    imageUrl: cafe.image_url ?? undefined,
    logoUrl: cafe.logo_url ?? undefined,
    isVerified: cafe.is_verified,
  }));
}

export async function searchActiveProducts(
  cafeId: string,
  term: string,
): Promise<ProductSummary[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("id,cafe_id,name,slug,category,price,image_url")
    .eq("status", "active")
    .eq("cafe_id", cafeId)
    .ilike("name", `%${term.trim()}%`)
    .order("name")
    .limit(10);

  if (error) {
    throw new Error("Unable to search products.");
  }

  return (data ?? []).map((product) => ({
    id: product.id,
    cafeId: product.cafe_id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    price: product.price ?? undefined,
    imageUrl: product.image_url ?? undefined,
  }));
}
