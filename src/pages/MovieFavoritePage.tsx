import useMovieFavoriteStore from "~/resources/useMovieFavoriteStore";

function MovieFavoritePage() {
  const { removeFromFavorite, favoriteMovies } = useMovieFavoriteStore();

  if (!favoriteMovies.length) {
    return <p>No Favorite Movies</p>;
  }

  return (
    <>
      <div>
        {favoriteMovies.map((mv) => {
          return (
            <div key={mv.imdbId}>
              <p>{mv.Title}</p>
              <button onClick={() => removeFromFavorite(mv)}>
                Remove from favorite
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieFavoritePage;
