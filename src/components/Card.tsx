import styled from "@emotion/styled";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Card = styled(Base)`
  background-color: #f4f4f4;
  padding: 2rem;
`;

export const CardSection = styled(Base)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
