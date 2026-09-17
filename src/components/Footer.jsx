import { Clapperboard } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#050507] px-4 py-12 text-slate-400">
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-[#e50914]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-xl bg-[#e50914] text-white shadow-lg shadow-red-950/40">
                <Clapperboard className="size-6" />
              </div>
              <div>
                <p className="text-lg font-black tracking-tight text-white">
                  Movie<span className="text-[#ff3340]">Box</span>
                </p>
                <p className="text-xs text-slate-500">
                  Discover unforgettable stories.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaFacebookF className="size-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
              >
                <FaYoutube className="size-5" />
              </a>
              <div className="ml-2 border-l border-white/10 pl-4">
                <p className="text-xs text-slate-500">
                  © {new Date().getFullYear()} MovieBox
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
