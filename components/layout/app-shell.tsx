import {
  Compass,
  Home as HomeIcon,
  Plus,
  Search,
  SlidersHorizontal,
  Trophy,
  UserRound,
} from "lucide-react";
import Link from "next/link";

type ActiveTab = "feed" | "explore" | "create" | "rankings" | "profile";

interface AppShellProps {
  activeTab: ActiveTab;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export function AppShell({
  activeTab,
  eyebrow = "CafeRank",
  title,
  children,
  sidebar,
}: AppShellProps) {
  return (
    <main className="min-h-screen bg-[#efe7dc] text-[#241A16]">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-6 px-0 lg:grid-cols-[260px_minmax(390px,480px)_320px] lg:px-6">
        <aside className="sticky top-0 hidden h-screen py-6 lg:block">
          <div className="flex h-full flex-col rounded-[30px] border border-[#E8DED2] bg-white/80 p-4 shadow-xl shadow-[#2d1b1214] backdrop-blur">
            <div className="px-2 py-3">
              <p className="text-xs font-black uppercase tracking-wide text-[#2F7D4F]">
                CafeRank
              </p>
              <h1 className="mt-1 text-2xl font-black">Cafe product ranks</h1>
            </div>
            <div className="mt-5 grid gap-2">
              <SideNavItem
                active={activeTab === "feed"}
                href="/feed"
                icon={<HomeIcon size={20} />}
                label="Feed"
              />
              <SideNavItem
                active={activeTab === "explore"}
                href="/explore"
                icon={<Compass size={20} />}
                label="Explore"
              />
              <SideNavItem
                active={activeTab === "rankings"}
                href="/rankings"
                icon={<Trophy size={20} />}
                label="Rankings"
              />
              <SideNavItem
                active={activeTab === "profile"}
                href="/profile/mikaela"
                icon={<UserRound size={20} />}
                label="Profile"
              />
            </div>
            <Link
              href="/create"
              className="mt-5 flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#7B4B2A] text-sm font-black text-white"
            >
              <Plus size={20} />
              Rank a product
            </Link>
            <div className="mt-auto rounded-[24px] bg-[#FAF7F2] p-4">
              <p className="text-sm font-black">MVP focus</p>
              <p className="mt-1 text-sm font-semibold leading-5 text-[#8B7E74]">
                Posts, upranks, comments, cafe menus, and product rankings.
              </p>
            </div>
          </div>
        </aside>

        <div className="mx-auto min-h-screen w-full max-w-md bg-[#FAF7F2] shadow-2xl shadow-[#2d1b1226] lg:max-w-none">
          <header className="sticky top-0 z-20 border-b border-[#E8DED2] bg-[#FAF7F2]/95 px-4 pb-3 pt-[calc(12px+env(safe-area-inset-top))] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-black uppercase tracking-wide text-[#2F7D4F]">
                  {eyebrow}
                </p>
                <h1 className="truncate text-xl font-black">{title}</h1>
              </div>
              <div className="flex gap-1">
                <button
                  className="grid size-10 place-items-center rounded-full bg-white text-[#7B4B2A]"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                <button
                  className="grid size-10 place-items-center rounded-full bg-white text-[#7B4B2A]"
                  aria-label="Filters"
                >
                  <SlidersHorizontal size={20} />
                </button>
              </div>
            </div>
          </header>

          {children}

          <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-md px-4 pb-[calc(10px+env(safe-area-inset-bottom))] lg:hidden">
            <div className="grid grid-cols-[1fr_1fr_56px_1fr_1fr] items-center gap-1 rounded-[24px] border border-[#E8DED2] bg-white/95 p-2 shadow-2xl shadow-[#2d1b1226] backdrop-blur">
              <BottomNavItem
                active={activeTab === "feed"}
                href="/feed"
                icon={<HomeIcon size={21} />}
                label="Feed"
              />
              <BottomNavItem
                active={activeTab === "explore"}
                href="/explore"
                icon={<Compass size={21} />}
                label="Explore"
              />
              <Link
                href="/create"
                className="mx-auto grid size-12 place-items-center rounded-2xl bg-[#C98A4A] text-white"
              >
                <Plus size={27} />
                <span className="sr-only">Create post</span>
              </Link>
              <BottomNavItem
                active={activeTab === "rankings"}
                href="/rankings"
                icon={<Trophy size={21} />}
                label="Ranks"
              />
              <BottomNavItem
                active={activeTab === "profile"}
                href="/profile/mikaela"
                icon={<UserRound size={21} />}
                label="Me"
              />
            </div>
          </nav>
        </div>

        <aside className="sticky top-0 hidden h-screen py-6 lg:block">
          {sidebar ?? <DefaultSidebar />}
        </aside>
      </div>
    </main>
  );
}

function SideNavItem({
  icon,
  label,
  href,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex min-h-12 items-center gap-3 rounded-2xl px-3 text-sm font-black ${
        active ? "bg-[#F3ECE3] text-[#241A16]" : "text-[#8B7E74]"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

function BottomNavItem({
  icon,
  label,
  href,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-2xl text-[10px] font-black ${
        active ? "bg-[#F3ECE3] text-[#241A16]" : "text-[#8B7E74]"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

function DefaultSidebar() {
  return (
    <div className="flex h-full flex-col gap-4 rounded-[30px] border border-[#E8DED2] bg-white/80 p-4 shadow-xl shadow-[#2d1b1214] backdrop-blur">
      <div>
        <p className="text-xs font-black uppercase tracking-wide text-[#2F7D4F]">
          Today
        </p>
        <h2 className="mt-1 text-xl font-black">What is moving</h2>
      </div>
      {[
        ["#1 Latte", "Spanish Latte is up 4 places"],
        ["#2 Matcha", "Matcha Cloud keeps climbing"],
        ["New peak", "Butter Croissant leads pastry"],
      ].map(([label, meta]) => (
        <div key={label} className="rounded-[22px] bg-[#FAF7F2] p-3">
          <p className="text-sm font-black text-[#2F7D4F]">{label}</p>
          <p className="mt-1 text-sm font-semibold text-[#8B7E74]">{meta}</p>
        </div>
      ))}
    </div>
  );
}
