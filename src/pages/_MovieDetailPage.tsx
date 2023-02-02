import styled from '@emotion/styled'

export { MovieTitle, TextHeader, TextParagraph } from '~/pages/_MovieListPage';

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 32px;
  gap: 12px;
`

export const StyledButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`

export const TextSubtle = styled.p`
  font-size: 12px;
  color: #222;
  margin: 0;
  padding: 0;
`
export const StyledButton = styled.button`
  padding: 8px 12px;
  margin: 0;
  font-size: 14px;
  color: #111;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid #111;
  border-radius: 4px;
`
