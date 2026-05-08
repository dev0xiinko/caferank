import { MapPin, Search, Star, Trophy } from "lucide-react";
import Image from "next/image";

import { ProductPostCard } from "@/components/feed/product-post-card";
import { AppShell } from "@/components/layout/app-shell";
import { posts, rankShelves, rankingRows } from "@/lib/mock-data";

export default function ExplorePage() {
  return (
    <AppShell activeTab="explore" title="Find your next order">
      <section className="space-y-5 px-4 pb-[calc(88px+env(safe-area-inset-bottom))] pt-4">
        <div className="flex h-12 items-center gap-2 rounded-2xl border border-[#E8DED2] bg-white px-3 text-[#8B7E74]">
          <Search size={19} />
          <span className="text-sm font-semibold">Search cafes or products</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {["Coffee", "Matcha", "Pastry", "Dessert", "Budget", "Near me"].map(
            (chip) => (
              <button
                key={chip}
                className="h-11 rounded-2xl bg-white px-2 text-sm font-black text-[#7B4B2A]"
              >
                {chip}
              </button>
            ),
          )}
        </div>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-black">Rank shelves</h2>
            <Trophy size={19} className="text-[#2F7D4F]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {rankShelves.slice(0, 2).map((shelf) => (
              <div
                key={shelf.label}
                className="relative aspect-[4/5] overflow-hidden rounded-[24px]"
              >
                <Image
                  src={shelf.image}
                  alt={shelf.label}
                  fill
                  sizes="(max-width: 430px) 50vw, 190px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-black">{shelf.label}</p>
                  <p className="text-xs font-semibold text-white/80">
                    {shelf.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-black">Top products nearby</h2>
          {rankingRows.map((row) => (
            <div
              key={row.product}
              className="grid grid-cols-[52px_1fr_auto] items-center gap-3 rounded-2xl border border-[#E8DED2] bg-white p-2"
            >
              <Image
                src={row.image}
                alt={row.product}
                width={52}
                height={52}
                className="size-[52px] rounded-xl object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-black">{row.product}</p>
                <p className="flex items-center gap-1 text-xs font-semibold text-[#8B7E74]">
                  <MapPin size={12} />
                  {row.cafe}
                </p>
              </div>
              <p className="flex items-center gap-1 text-sm font-black text-[#2F7D4F]">
                <Star size={15} className="fill-[#C98A4A] text-[#C98A4A]" />
                {row.score}
              </p>
            </div>
          ))}
        </section>

        <ProductPostCard post={posts[1]} />
      </section>
    </AppShell>
  );
}
