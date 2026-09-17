const API_URL = "https://api.tvmaze.com";

export const getMovies = async (search = "") => {
  const query = search.trim();

  const url = query
    ? `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
    : `${API_URL}/shows`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();

  return query ? data.map((item) => item.show) : data;
};
