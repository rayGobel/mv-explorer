import styled from "@emotion/styled";
import { mediaQueries } from "~/_App";

const Base = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: #161616;
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;

  ${mediaQueries.TABLET} {
    font-size: 1rem;
  }
`;

export const TextTitle = styled(Base)`
  font-size: 1.75rem;
  font-weight: 600;
  padding-top: 0.5rem;

  ${mediaQueries.TABLET} {
    font-size: 2rem;
  }
`;

export const TextTitleMd = styled(TextTitle)`
  font-size: 1rem;

  ${mediaQueries.TABLET} {
    font-size: 1.5rem;
  }
`;

export const TextSubtitle = styled(Base)`
  font-weight: 300;
  color: #525252;
`;

export const TextBody = styled(Base)``;

export const TextLink = styled(Base)`
  font-size: 1.5rem;
`;
