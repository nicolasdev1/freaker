import styled from 'styled-components'

export const Container = styled.div`
  grid-area: CE;

  background: ${({ theme: { colors } }) => colors.background};
`

export const CardWrapper = styled.div`
  display: grid;

  grid-template-columns: 385px 385px 385px 385px;
  grid-template-rows: 270px 270px 270px;

  grid-template-areas:

  'C1 C2 C3 C4'
  'C1 C2 C3 C4'
  'C1 C2 C3 C4';

  margin: 20px 0 10px 84px ;
`
