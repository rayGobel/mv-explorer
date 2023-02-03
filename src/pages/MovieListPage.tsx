import { useNavigate, Link } from "react-router-dom";
import useSearchMovie from "~/resources/useSearchMovie";
import { Movie } from "~/resources/Movie";
import {
  MovieTitle,
  StyledImg,
  StyledListItem,
  StyledMovieList,
  StyledPage,
  TextHeader,
  TextLarge,
  TextParagraph,
} from "./_MovieListPage";

function MovieListPage() {
  const { movieList } = useSearchMovie("shrek");
  const navigate = useNavigate();

  const navigateToMovieDetail = (imdbID: Movie["imdbID"]) => {
    return navigate(`/movie-detail/${imdbID}`);
  };

  return (
    <StyledPage data-testid="app--movie-list-page">
      <TextHeader data-testid="movie-list-page--title">Movie List</TextHeader>
      <Link to="/favorite-movies">
        <TextHeader>Favorite's</TextHeader>
      </Link>

      <StyledMovieList data-testid="movie-list-page--movie-list">
        {movieList.map((movie: Movie) => {
          const { Title, Poster, Type, Year, imdbID } = movie;

          return (
            <StyledListItem
              key={imdbID}
              onClick={() => navigateToMovieDetail(imdbID)}
            >
              <StyledImg data-testid="movie-list--image" src={Poster} />
              <MovieTitle>
                <TextLarge data-testid="movie-list--name">{Title}</TextLarge>
                <TextParagraph data-testid="movie-list--year">
                  ({Year})
                </TextParagraph>
              </MovieTitle>
              <TextParagraph data-testid="movie-list--type">
                Type: {Type}
              </TextParagraph>
            </StyledListItem>
          );
        })}
      </StyledMovieList>
    </StyledPage>
  );
}

export default MovieListPage;
