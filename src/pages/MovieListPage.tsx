import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useSearchMovie from "~/resources/useSearchMovie";
import { Movie } from "~/resources/Movie";
import { Card } from "~/components/Card";
import { Button } from "~/components/Button";
import { TextTitle, TextBody } from "~/components/Text";
import MovieCard from "~/components/MovieCard";
import {
  MovieTitle,
  StyledSearchBar,
  StyledMovieList,
  StyledPage,
  TextHeader,
} from "./_MovieListPage";

function SearchMovie(props: { onSearch: (term: string) => void }) {
  const [searchTerm, setSearchTerm] = useState<string>();
  const { onSearch } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <StyledSearchBar>
      <input onInput={handleInputChange} />
      <Button onClick={() => (searchTerm ? onSearch(searchTerm) : null)}>
        Search
      </Button>
    </StyledSearchBar>
  );
}

function MovieListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useSearchMovie(searchTerm);
  const navigate = useNavigate();

  const navigateToMovieDetail = (movie: Movie) => {
    const { imdbID } = movie;
    return navigate(`/movie-detail/${imdbID}`);
  };

  return (
    <StyledPage data-testid="app--movie-list-page">
      <TextTitle data-testid="movie-list-page--title">Movie List</TextTitle>

      <SearchMovie onSearch={(term) => setSearchTerm(term)} />

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
