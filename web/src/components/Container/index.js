import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1351px;

  margin: 0 auto;

  @media screen and (max-width: 1420px) {
    max-width: 1051px;
  }

  @media screen and (max-width: 1100px) {
    max-width: 851px;
  }
`

export default Container
