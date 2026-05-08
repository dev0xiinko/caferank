import { Camera } from "lucide-react";
import Image from "next/image";

import { rankShelves } from "@/lib/mock-data";

export function RankShelfStrip() {
  return (
    <section className="border-b border-[#E8DED2] bg-[#FAF7F2] py-4">
      <div className="flex gap-3 overflow-x-auto px-4 [scrollbar-width:none]">
        <button className="grid h-[118px] w-[102px] shrink-0 place-items-center rounded-2xl border border-dashed border-[#C98A4A] bg-white text-[#7B4B2A]">
          <div className="grid justify-items-center gap-2">
            <Camera size={24} />
            <span className="text-xs font-black">Rank yours</span>
          </div>
        </button>

        {rankShelves.map((shelf) => (
          <button
            key={shelf.label}
            className="relative h-[118px] w-[154px] shrink-0 overflow-hidden rounded-2xl text-left"
          >
            <Image
              src={shelf.image}
              alt={shelf.label}
              fill
              sizes="154px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className="text-sm font-black">{shelf.label}</p>
              <p className="text-xs font-semibold text-white/80">{shelf.meta}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
