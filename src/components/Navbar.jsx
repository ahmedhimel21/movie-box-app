import { NavLink } from "react-router";
import { Clapperboard, Film } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070b]/85 backdrop-blur-xl">
        <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="navbar-start">
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
          </div>
          <div className="navbar-end">
            <NavLink
              to="/movies"
              className="btn rounded-xl border-0 bg-[#e50914] px-5 font-bold text-white shadow-lg shadow-red-950/30 hover:bg-[#ff2430]"
            >
              <Film className="size-4" />
              Movies
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
