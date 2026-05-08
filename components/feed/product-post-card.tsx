import { Bookmark, MapPin, MessageCircle, Star, Trophy } from "lucide-react";
import Image from "next/image";

import type { posts } from "@/lib/mock-data";

type ProductPost = (typeof posts)[number];

export function ProductPostCard({
  post,
  priority = false,
}: {
  post: ProductPost;
  priority?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-[26px] border border-[#E8DED2] bg-white">
      <div className="relative aspect-[3/4] bg-[#E8DED2]">
        <Image
          src={post.image}
          alt={`${post.product} from ${post.cafe}`}
          fill
          priority={priority}
          sizes="(max-width: 430px) 100vw, 430px"
          className="object-cover"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3">
          <div className="rounded-2xl bg-white/92 px-3 py-2 shadow-sm backdrop-blur">
            <p className="text-xs font-black text-[#2F7D4F]">{post.rank}</p>
            <p className="text-[11px] font-bold text-[#8B7E74]">
              {post.movement}
            </p>
          </div>

          <div className="grid gap-2">
            <button className="grid size-12 place-items-center rounded-2xl bg-[#2F7D4F] text-white shadow-lg shadow-black/20">
              <Trophy size={22} />
              <span className="sr-only">Uprank</span>
            </button>
            <button
              className="grid size-12 place-items-center rounded-2xl bg-white/92 text-[#241A16] shadow-sm backdrop-blur"
              aria-label="Save"
            >
              <Bookmark size={21} />
            </button>
          </div>
        </div>

        <div className="absolute inset-x-3 bottom-3 rounded-[22px] bg-white/94 p-3 shadow-xl shadow-black/15 backdrop-blur">
          <div className="flex items-start gap-3">
            <Image
              src={post.avatar}
              alt={`${post.username} avatar`}
              width={42}
              height={42}
              className="size-[42px] rounded-2xl object-cover"
            />
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-lg font-black">{post.product}</h2>
              <p className="truncate text-sm font-semibold text-[#7B4B2A]">
                {post.cafe} · @{post.username}
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-[#8B7E74]">
                <MapPin size={13} />
                {post.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-3 px-3 py-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-black text-[#2F7D4F]">▲ {post.upranks}</span>
            <span className="flex items-center gap-1 font-bold">
              <Star size={15} className="fill-[#C98A4A] text-[#C98A4A]" />
              {post.rating}
            </span>
            <span className="flex items-center gap-1 font-bold text-[#8B7E74]">
              <MessageCircle size={15} />
              {post.comments}
            </span>
          </div>
          <p className="mt-2 text-sm leading-5 text-[#4f4039]">
            {post.caption}
          </p>
        </div>
        <button className="h-11 rounded-full bg-[#7B4B2A] px-4 text-sm font-black text-white">
          Uprank
        </button>
      </div>
    </article>
  );
}
