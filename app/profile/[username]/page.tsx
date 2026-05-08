import Image from "next/image";

import { AppShell } from "@/components/layout/app-shell";
import { posts } from "@/lib/mock-data";

export default async function ProfilePage(props: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await props.params;

  return (
    <AppShell activeTab="profile" title={`@${username}`}>
      <section className="space-y-5 px-4 pb-[calc(88px+env(safe-area-inset-bottom))] pt-4">
        <div className="rounded-[28px] border border-[#E8DED2] bg-white p-4">
          <div className="flex gap-4">
            <Image
              src={posts[0].avatar}
              alt={`${username} avatar`}
              width={84}
              height={84}
              className="size-[84px] rounded-[28px] object-cover"
            />
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-black">@{username}</h2>
              <p className="mt-1 text-sm font-semibold text-[#8B7E74]">
                Cafe product scout. Hunting balanced lattes and worth-it pastry.
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 rounded-2xl bg-[#FAF7F2] text-center">
            {[
              ["38", "posts"],
              ["12.4k", "upranks"],
              ["42", "cafes"],
            ].map(([value, label]) => (
              <div key={label} className="p-3">
                <p className="font-black">{value}</p>
                <p className="text-xs font-semibold text-[#8B7E74]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {posts.concat(posts).map((post, index) => (
            <div
              key={`${post.id}-${index}`}
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
    </AppShell>
  );
}
