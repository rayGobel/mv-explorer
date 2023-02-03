import styled from "@emotion/styled";
import { mediaQueries } from "~/_App";

export const StyledPage = styled.div`
  padding: 8px 32px;
`;

export const StyledMovieList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  list-style-position: outside;
  padding: 0px;
  gap: 12px;
  align-items: center;

  ${mediaQueries.TABLET} {
    flex-flow: row wrap;
    margin: 32px 20px;
  }
`;

export const StyledListItem = styled.li`
  border: 2px solid #bbb;
  padding: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;

  ${mediaQueries.TABLET} {
    max-width: 45%;
  }
`;

export const StyledImg = styled.img`
  border-radius: 12px;
  min-width: 300px;
  height: auto;
  object-fit: cover;
`;

export const MovieTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 4px;
`;

export const TextLarge = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

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
