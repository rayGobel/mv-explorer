import { css } from "@emotion/react";
import styled from "@emotion/styled";

// Unit in pixels
const MOBILE = 600;
const MOBILE_LANDSCAPE = 900;
const TABLET = 1200;
const DESKTOP = 1800;

export const mediaQueries = {
  MOBILE: `@media (min-width: ${MOBILE}px)`,
  MOBILE_LANDSCAPE: `@media (min-width: ${MOBILE_LANDSCAPE}px)`,
  TABLET: `@media (min-width: ${TABLET}px)`,
  DESKTOP: `@media (min-width: ${DESKTOP}px)`,
};

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0;
  max-width: 100%;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 0.5rem 1rem;
  align-self: start;

  * {
    flex: 1 0 auto;
  }
`;
