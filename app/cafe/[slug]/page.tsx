import { MapPin, Navigation } from "lucide-react";
import Image from "next/image";

import { AppShell } from "@/components/layout/app-shell";
import { cafeMenu, posts } from "@/lib/mock-data";

export default async function CafePage(props: {
  params: Promise<{ slug: string }>;
}) {
  await props.params;

  return (
    <AppShell activeTab="explore" title="Espresso Bay">
      <section className="pb-[calc(88px+env(safe-area-inset-bottom))]">
        <div className="relative h-48">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85"
            alt="Espresso Bay interior"
            fill
            sizes="(max-width: 430px) 100vw, 430px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-3xl font-black">Espresso Bay</h2>
            <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
              <MapPin size={15} />
              Lahug, Cebu City
            </p>
          </div>
        </div>

        <div className="space-y-5 px-4 pt-4">
          <div className="grid grid-cols-3 rounded-[24px] border border-[#E8DED2] bg-white text-center">
            {[
              ["184", "posts"],
              ["4.8", "rating"],
              ["#3", "rank"],
            ].map(([value, label]) => (
              <div key={label} className="p-3">
                <p className="font-black">{value}</p>
                <p className="text-xs font-semibold text-[#8B7E74]">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="h-12 rounded-2xl bg-[#7B4B2A] text-sm font-black text-white">
              Follow
            </button>
            <button className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-white text-sm font-black text-[#7B4B2A]">
              <Navigation size={17} />
              Directions
            </button>
          </div>

          <section>
            <h3 className="mb-3 text-lg font-black">Cafe menu</h3>
            <div className="grid grid-cols-2 gap-3">
              {cafeMenu.map((item) => (
                <article key={item.name} className="min-w-0">
                  <div className="relative aspect-square overflow-hidden rounded-[24px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 430px) 50vw, 190px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 truncate text-sm font-black">{item.name}</p>
                  <p className="text-xs font-semibold text-[#8B7E74]">
                    {item.price} · {item.rating} · ▲ {item.upranks}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-lg font-black">User posts</h3>
            <div className="grid grid-cols-3 gap-1.5">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="relative aspect-square overflow-hidden rounded-2xl"
                >
                  <Image
                    src={post.image}
                    alt={post.product}
                    fill
                    sizes="(max-width: 430px) 33vw, 130px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </AppShell>
  );
}
