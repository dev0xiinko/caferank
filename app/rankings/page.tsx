import { TrendingUp } from "lucide-react";
import Image from "next/image";

import { AppShell } from "@/components/layout/app-shell";
import { rankingRows } from "@/lib/mock-data";

export default function RankingsPage() {
  return (
    <AppShell activeTab="rankings" title="Product leaderboards">
      <section className="space-y-4 px-4 pb-[calc(88px+env(safe-area-inset-bottom))] pt-4">
        <div className="flex gap-2 overflow-x-auto [scrollbar-width:none]">
          {["All", "Coffee", "Matcha", "Pastry", "Dessert", "This week"].map(
            (chip, index) => (
              <button
                key={chip}
                className={`h-10 shrink-0 rounded-full px-4 text-sm font-black ${
                  index === 0
                    ? "bg-[#7B4B2A] text-white"
                    : "bg-white text-[#7B4B2A]"
                }`}
              >
                {chip}
              </button>
            ),
          )}
        </div>

        <div className="rounded-[26px] bg-[#2F7D4F] p-4 text-white">
          <p className="text-xs font-black uppercase text-white/75">
            Weekly mover
          </p>
          <div className="mt-2 flex items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black">Spanish Latte</h2>
              <p className="text-sm font-semibold text-white/80">
                Espresso Bay moved up 4 places
              </p>
            </div>
            <TrendingUp size={30} />
          </div>
        </div>

        <div className="space-y-3">
          {rankingRows.map((row) => (
            <article
              key={row.product}
              className="grid grid-cols-[42px_72px_1fr] items-center gap-3 rounded-[24px] border border-[#E8DED2] bg-white p-3"
            >
              <p className="text-center text-xl font-black text-[#7B4B2A]">
                #{row.rank}
              </p>
              <Image
                src={row.image}
                alt={row.product}
                width={72}
                height={72}
                className="size-[72px] rounded-2xl object-cover"
              />
              <div className="min-w-0">
                <h2 className="truncate text-base font-black">{row.product}</h2>
                <p className="truncate text-sm font-semibold text-[#8B7E74]">
                  {row.cafe}
                </p>
                <p className="mt-1 text-sm font-black text-[#2F7D4F]">
                  {row.score} · ▲ {row.upranks}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
