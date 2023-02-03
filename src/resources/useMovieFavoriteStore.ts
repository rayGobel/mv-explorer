import type { Movie } from "./Movie";

function useMovieFavoriteStore() {
  const addToFavorite = (movie: Movie) => {};
  const removeFromFavorite = (movie: Movie) => {};

  return {
    addToFavorite,
    removeFromFavorite,
  };
}

export default useMovieFavoriteStore;
