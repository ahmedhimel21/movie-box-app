const API_URL = "https://api.tvmaze.com";

export const getFeaturedMovies = async () => {
  const res = await fetch(`${API_URL}/shows`);

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();

  return data
    .filter((movie) => movie?.rating?.average)
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 9);
};
