import { ArrowRight, Play } from "lucide-react";
import { NavLink } from "react-router";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_40%,rgba(229,9,20,.28),transparent_35%),linear-gradient(90deg,#050507_0%,rgba(5,5,7,.9)_35%,rgba(5,5,7,.45)_75%,#050507_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 -z-10 bg-linear-to-t from-[#07070b] to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300 backdrop-blur">
              <span className="size-2 rounded-full bg-[#ff3340] shadow-[0_0_12px_#ff3340]" />
              Your movie universe
            </div>
            <h1 className="text-5xl font-black leading-[.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
              YOUR NEXT
              <span className="block text-[#ff3340]">MOVIE AWAITS.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Discover unforgettable stories, explore new worlds, and find
              something worth watching tonight.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <NavLink
                to="/movies"
                className="btn h-12 rounded-xl border-0 bg-[#e50914] px-6 font-bold text-white shadow-xl shadow-red-950/40 hover:bg-[#ff2430]"
              >
                <Play className="size-4 fill-current" />
                Explore Movies
              </NavLink>
              <a
                href="#featured"
                className="btn h-12 rounded-xl border border-white/15 bg-white/5 px-6 font-bold text-white backdrop-blur hover:border-white/25 hover:bg-white/10"
              >
                Featured Movies
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
