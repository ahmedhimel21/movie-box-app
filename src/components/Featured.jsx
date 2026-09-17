import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import MovieCard from "./MovieCard";
import { getFeaturedMovies } from "../services/movieServiceFeatured";

export default function Featured() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        const data = await getFeaturedMovies();
        setFeaturedMovies(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedMovies();
  }, []);
  return (
    <>
      <section
        id="featured"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Top Rated <span className="text-[#ff3340]">Movies</span>
            </h2>
          </div>
          <NavLink
            to="/movies"
            className="btn btn-sm rounded-lg border border-white/10 bg-white/5 font-bold text-white hover:bg-white/10"
          >
            Browse all <ArrowRight className="size-4" />
          </NavLink>
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
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMovies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
