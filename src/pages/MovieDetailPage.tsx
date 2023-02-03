import { useNavigate, useParams } from "react-router-dom";
import useGetMovieDetail from "~/resources/useGetMovieDetail";
import {
  MovieTitle,
  StyledButton,
  StyledButtonGroup,
  StyledPage,
  TextHeader,
  TextParagraph,
  TextSubtle,
} from "./_MovieDetailPage";

function MovieDetailPage() {
  const { movieId } = useParams();
  const { movie, isFetching } = useGetMovieDetail(movieId);
  const navigate = useNavigate();

  if (!movie && isFetching) {
    return <TextParagraph>Loading</TextParagraph>;
  }

  const navigateToMovieList = () => {
    return navigate("/");
  };

  const { Actors, Director, Genre, Plot, Released, Runtime, Title, Year } =
    movie;

  return (
    <StyledPage>
      <MovieTitle>
        <TextHeader>{Title}</TextHeader>
        <TextParagraph>({Year})</TextParagraph>
      </MovieTitle>
      <div>
        <TextSubtle>{Genre}</TextSubtle>
      </div>
      <div>
        <TextParagraph>Directed By: {Director}</TextParagraph>
        <TextParagraph>Actors: {Actors}</TextParagraph>
      </div>
      <div>
        <TextParagraph>Release Date: {Released}</TextParagraph>
        <TextParagraph>Runtime: {Runtime}</TextParagraph>
      </div>
      <div>
        <TextParagraph>Plot</TextParagraph>
        <TextParagraph>{Plot}</TextParagraph>
      </div>

      <StyledButtonGroup>
        <StyledButton>Save to favorites</StyledButton>
        <StyledButton onClick={navigateToMovieList}>Back</StyledButton>
      </StyledButtonGroup>
    </StyledPage>
  );
}

export default MovieDetailPage;
