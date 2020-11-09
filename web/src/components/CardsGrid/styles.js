import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ gridColumns }) => gridColumns};
  grid-gap: 30px;

  margin: 50px 0;

  @media screen and (max-width: 1420px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
