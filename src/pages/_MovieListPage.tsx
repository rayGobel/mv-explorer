import styled from "@emotion/styled";
import { mediaQueries } from "~/_App";

export const StyledPage = styled.div`
  width: 100%;
`;

export const StyledMovieList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  list-style-position: outside;
  padding: 0px;
  margin: 0px;
  gap: 1rem;
  justify-content: center;

  ${mediaQueries.TABLET} {
    flex-flow: row wrap;
  }
`;

export const StyledSearchBar = styled.div`
  display: flex;
  padding: 1rem 0;

  & > button {
    flex: 1 0 auto;
  }

  & > input {
    flex: 3 0 auto;
  }

  ${mediaQueries.TABLET} {
    max-width: 50%;
  }
`;

export const MovieTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 4px;
`;

/**
 * @deprecated @rayGobel
 */
export const TextLarge = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

/**
 * @deprecated @rayGobel
 */
export const TextParagraph = styled.p`
  font-size: 14px;
  color: #111;
  margin: 0;
`;

export const TextHeader = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;
