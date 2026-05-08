import { Camera, ChevronRight, ImagePlus, Star, Type } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";

export default function CreatePage() {
  return (
    <AppShell activeTab="create" title="Rank a cafe product">
      <section className="space-y-4 px-4 pb-[calc(88px+env(safe-area-inset-bottom))] pt-4">
        <div className="grid aspect-[4/5] place-items-center rounded-[28px] border border-dashed border-[#C98A4A] bg-white text-[#7B4B2A]">
          <div className="grid justify-items-center gap-3">
            <div className="grid size-16 place-items-center rounded-3xl bg-[#F3ECE3]">
              <Camera size={30} />
            </div>
            <div className="text-center">
              <p className="text-lg font-black">Add product photo</p>
              <p className="text-sm font-semibold text-[#8B7E74]">
                Square photos work best for rankings
              </p>
            </div>
          </div>
        </div>

        {[
          ["Cafe", "Select or suggest cafe", ImagePlus],
          ["Product", "Select or suggest product", ChevronRight],
          ["Rating", "Add 1 to 5 stars", Star],
          ["Caption", "Optional taste notes", Type],
        ].map(([label, helper, Icon]) => (
          <button
            key={label as string}
            className="flex min-h-16 w-full items-center gap-3 rounded-2xl border border-[#E8DED2] bg-white px-4 text-left"
          >
            <span className="grid size-10 place-items-center rounded-2xl bg-[#F3ECE3] text-[#7B4B2A]">
              <Icon size={19} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-black">{label as string}</span>
              <span className="block truncate text-xs font-semibold text-[#8B7E74]">
                {helper as string}
              </span>
            </span>
            <ChevronRight size={18} className="text-[#C98A4A]" />
          </button>
        ))}

        <button className="h-13 w-full rounded-2xl bg-[#7B4B2A] text-sm font-black text-white">
          Preview ranking post
        </button>
      </section>
    </AppShell>
  );
}
