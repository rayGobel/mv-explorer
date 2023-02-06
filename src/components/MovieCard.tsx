import styled from "@emotion/styled";
import type { Movie } from "~/resources/Movie";
import { TextTitleMd, TextBody } from "~/components/Text";
import { mediaQueries } from "~/_App";

interface MovieCardProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
  onDeleteMovie?: (movie: Movie) => void;
}

const DeleteButton = styled.button`
  border: none;
  border-left: 1px solid #bbb;
  background-color: #fff;
  color: red;
  margin: -1rem -1rem -1rem 0;
  padding: 0 0.5rem;
`;

const StyledMovieCard = styled.div`
  border: 1px solid #bbb;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex: 1 0 40%;
  justify-content: space-between;
  align-self: stretch;
`;

const StyledMovieCardContent = styled.div`
  flex: 1 1 auto;
  padding: 0 0.5rem;
  max-width: 100%;
  display: flex;
  flex-flow: column wrap;
`;

export const StyledImg = styled.img`
  max-width: 100px;
  height: auto;
  object-fit: cover;

  ${mediaQueries.TABLET} {
    min-width: 300px;
  }
`;

function MovieCard(props: MovieCardProps) {
  const { movie, onClick, onDeleteMovie } = props;
  const { Title, Poster, Type, Year } = movie;

  const handleOnClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };

  const showDelete = !!onDeleteMovie;

  return (
    <StyledMovieCard onClick={handleOnClick}>
      <StyledImg data-testid="movie-list--image" src={Poster} />
      <StyledMovieCardContent>
        <TextTitleMd data-testid="movie-list--name">{Title}</TextTitleMd>
        <TextBody data-testid="movie-list--year">({Year})</TextBody>
        <TextBody data-testid="movie-list--type">Type: {Type}</TextBody>
      </StyledMovieCardContent>
      {showDelete && (
        <DeleteButton onClick={() => onDeleteMovie(movie)}>DEL</DeleteButton>
      )}
    </StyledMovieCard>
  );
}

export default MovieCard;
