import { CalendarDays, Star } from "lucide-react";
import Modal from "./Modal";

export default function MovieCard({ movie }) {
  const { name, image, rating, premiered } = movie;
  return (
    <>
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111116] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-950/20">
        <figure className="relative overflow-hidden bg-black">
          <img
            src={image?.original}
            alt={`${name} poster`}
            loading="lazy"
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#111116] via-transparent to-transparent opacity-70" />
          <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/65 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {premiered ? new Date(premiered).getFullYear() : "N/A"}
          </div>
        </figure>

        <div className="p-5">
          <h2 className="line-clamp-1 text-lg font-extrabold text-white">
            {name}
          </h2>
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="flex items-center gap-1.5 text-sm font-bold text-amber-300">
              <Star className="size-4 fill-current" />
              {rating?.average ?? "N/A"}
            </p>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <CalendarDays className="size-4" />
              {premiered ? new Date(premiered).getFullYear() : "N/A"}
            </div>
          </div>
          <div className="mt-5">
            <Modal movie={movie} />
          </div>
        </div>
      </article>
    </>
  );
}
