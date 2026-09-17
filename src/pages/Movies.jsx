import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useOutletContext } from "react-router";
import { getMovies } from "../services/movieService";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useOutletContext();

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      try {
        const data = await getMovies(search);
        setMovies(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchShows();
  }, [search]);

  return (
    <main className="min-h-screen bg-[#07070b] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Movie library
          </p>
          <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">
            {search.trim() ? `Results for “${search}”` : "Explore Movies"}
          </h1>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="h-107.5 animate-pulse rounded-2xl border border-white/5 bg-white/5"
              />
            ))}
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {movies.map((movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/3 py-20 text-center">
            <h2 className="text-xl font-bold text-white">No movies found</h2>
            <p className="mt-2 text-sm text-slate-400">
              Try another movie title.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
