import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ gridColumns }) => gridColumns};
  grid-gap: 30px;

  margin: 50px 0;
`
