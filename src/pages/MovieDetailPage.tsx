import { useNavigate, useParams } from "react-router-dom";
import useGetMovieDetail from "~/resources/useGetMovieDetail";
import useMovieFavoriteStore from "~/resources/useMovieFavoriteStore";
import { Button, ButtonTertiary } from "~/components/Button";
import { Card, CardSection } from "~/components/Card";
import { TextBody, TextSubtitle } from "~/components/Text";
import {
  MovieTitle,
  StyledButtonGroup,
  StyledPage,
  TextHeader,
  TextSubtle,
} from "./_MovieDetailPage";

function MovieDetailPage() {
  const { movieId } = useParams();
  const { movie, isFetching } = useGetMovieDetail(movieId);
  const {
    movieInFavorites,
    addToFavorite,
    removeFromFavorite,
    favoriteMovies,
  } = useMovieFavoriteStore();
  const navigate = useNavigate();

  if (!movie && isFetching) {
    return <TextBody>Loading</TextBody>;
  }

  const favoriteBtnText = movieInFavorites(movie)
    ? "Remove from favorite"
    : "Add to favorite";

  const switchMovieFromFavorite = () => {
    if (movieInFavorites(movie)) {
      removeFromFavorite(movie);
    } else {
      addToFavorite(movie);
    }
  };

  const navigateToMovieList = () => {
    return navigate("/");
  };

  const { Actors, Director, Genre, Plot, Released, Runtime, Title, Year } =
    movie;

  return (
    <Card>
      <MovieTitle>
        <TextHeader>{Title}</TextHeader>
        <TextBody>({Year})</TextBody>
      </MovieTitle>

      <CardSection>
        <TextSubtitle>{Genre}</TextSubtitle>
        <TextBody>Directed By: {Director}</TextBody>
        <TextBody>Actors: {Actors}</TextBody>
      </CardSection>

      <CardSection>
        <TextBody>Release Date: {Released}</TextBody>
        <TextBody>Runtime: {Runtime}</TextBody>
      </CardSection>

      <CardSection>
        <TextBody>Plot</TextBody>
        <TextBody>{Plot}</TextBody>
      </CardSection>

      <StyledButtonGroup>
        <Button variant="primary" onClick={switchMovieFromFavorite}>
          {favoriteBtnText}
        </Button>
        <ButtonTertiary onClick={navigateToMovieList}>Back</ButtonTertiary>
      </StyledButtonGroup>
    </Card>
  );
}

export default MovieDetailPage;
