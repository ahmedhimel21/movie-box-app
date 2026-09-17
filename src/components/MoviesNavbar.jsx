import { Clapperboard, Home, Search } from "lucide-react";
import { NavLink } from "react-router";

export default function MoviesNavbar({ search, setSearch }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070b]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            className="group flex items-center gap-2 text-xl font-black tracking-tight text-white"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#e50914] shadow-lg shadow-red-950/40 transition-transform group-hover:scale-105">
              <Clapperboard className="size-6" />
            </span>
            <span>
              Movie<span className="text-[#ff3340]">Box</span>
            </span>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 ${isActive ? "bg-primary text-primary-content shadow-lg shadow-primary/20" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
            }
          >
            {" "}
            <Home className="size-4 transition-transform group-hover:scale-110" />{" "}
            <span>Home</span>{" "}
          </NavLink>
          <label className="flex w-full max-w-xl items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-red-500/70 focus-within:bg-white/10 focus-within:ring-2 focus-within:ring-red-500/15">
            <Search className="size-5 shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Search for a movie..."
              aria-label="Search for a movie"
              className="input h-12 min-w-0 flex-1 border-0 bg-transparent px-0 text-white outline-none focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
      </header>
    </>
  );
}
