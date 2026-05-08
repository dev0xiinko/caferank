import { posts } from "@/lib/mock-data";
import { ProductPostCard } from "@/components/feed/product-post-card";
import { RankShelfStrip } from "@/components/feed/rank-shelf-strip";
import { AppShell } from "@/components/layout/app-shell";

export function FeedScreen() {
  return (
    <AppShell activeTab="feed" title="Ranked cafe products">
      <RankShelfStrip />

      <section className="space-y-5 px-3 pb-[calc(88px+env(safe-area-inset-bottom))] pt-4">
        {posts.map((post, index) => (
          <ProductPostCard key={post.id} post={post} priority={index === 0} />
        ))}
      </section>
    </AppShell>
  );
}
