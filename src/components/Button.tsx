import styled from "@emotion/styled";
import { mediaQueries } from "~/_App";

const bgVariants = {
  primary: "#0f62fe",
};

const bgVariantsHover = {
  primary: "#0353e9",
};

interface Props {
  variant?: "primary";
}

const Base = styled.button<Props>`
  margin: 0;
  padding-left: 0.5rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  min-height: 2.5rem;
  border: none;
  overflow-wrap: break-word;
  text-align: left;

  ${mediaQueries.TABLET} {
    padding-left: 1rem;
    padding-right: 4rem;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Button = styled(Base)`
  color: #fff;
  background-color: #0f62fe;

  &:hover {
    background-color: #0353e9;
  }
`;

export const ButtonTertiary = styled(Base)`
  background-color: #fff;
  border: 1px solid #0f62fe;
  color: #0f62fe;

  &:hover {
    background-color: #0353e9;
    border: 1px solid #0353e9;
    color: #fff;
  }
`;
