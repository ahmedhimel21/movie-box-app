import { CalendarDays, Star } from "lucide-react";

export default function MovieDetailsCard({ movie }) {
  const { name, image, rating, premiered, summary, genres = [] } = movie;

  return (
    <div className="grid md:grid-cols-[260px_1fr]">
      <img
        src={image?.original}
        alt={`${name} poster`}
        className="h-80 w-full object-cover md:h-full"
      />
      <div className="p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
          Movie details
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight">{name}</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1.5 text-sm font-bold text-amber-300">
            <Star className="size-4 fill-current" /> {rating?.average ?? "N/A"}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-sm font-semibold text-slate-300">
            <CalendarDays className="size-4" />
            {premiered ? new Date(premiered).getFullYear() : "N/A"}
          </span>
        </div>
        {genres.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-200"
              >
                {genre}
              </span>
            ))}
          </div>
        )}
        <div className="prose prose-invert mt-6 max-w-none text-sm leading-7 text-slate-300">
          <p>
            <span className="font-bold text-white">Overview:</span>{" "}
            {summary?.replace(/<[^>]*>/g, "") || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}
