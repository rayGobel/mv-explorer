import { useNavigate, Link } from "react-router-dom";
import useSearchMovie from "~/resources/useSearchMovie";
import { Movie } from "~/resources/Movie";
import { Card } from "~/components/Card";
import { TextTitle, TextBody } from "~/components/Text";
import MovieCard from "~/components/MovieCard";
import {
  MovieTitle,
  StyledMovieList,
  StyledPage,
  TextHeader,
} from "./_MovieListPage";

function MovieListPage() {
  const { movieList } = useSearchMovie("shrek");
  const navigate = useNavigate();

  const navigateToMovieDetail = (movie: Movie) => {
    const { imdbID } = movie;
    return navigate(`/movie-detail/${imdbID}`);
  };

  return (
    <StyledPage data-testid="app--movie-list-page">
      <TextTitle data-testid="movie-list-page--title">Movie List</TextTitle>

      <StyledMovieList data-testid="movie-list-page--movie-list">
        {movieList.map((movie: Movie) => (
          <MovieCard
            movie={movie}
            key={movie.imdbID}
            onClick={navigateToMovieDetail}
          />
        ))}
      </StyledMovieList>
    </StyledPage>
  );
}

export default MovieListPage;
