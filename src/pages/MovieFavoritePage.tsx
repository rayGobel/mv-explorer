import styled from "@emotion/styled";
import { mediaQueries } from "~/_App";
import useMovieFavoriteStore from "~/resources/useMovieFavoriteStore";
import type { Movie } from "~/resources/Movie";
import { TextTitle } from "~/components/Text";
import MovieCard from "~/components/MovieCard";

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  width: 100%;

  ${mediaQueries.TABLET} {
    flex-flow: row wrap;
  }
`;

function MovieFavoritePage() {
  const { removeFromFavorite, favoriteMovies } = useMovieFavoriteStore();

  if (!favoriteMovies.length) {
    return <p>No Favorite Movies</p>;
  }

  const handleMovieDelete = (movie: Movie) => {
    removeFromFavorite(movie);
  };

  return (
    <div style={{ width: "100%" }}>
      <TextTitle data-testid="movie-list-page--title">Movie List</TextTitle>

      <StyledWrapper>
        {favoriteMovies.map((mv) => {
          return (
            <MovieCard
              movie={mv}
              key={mv.imdbID}
              onDeleteMovie={handleMovieDelete}
            />
          );
        })}
      </StyledWrapper>
    </div>
  );
}

export default MovieFavoritePage;
