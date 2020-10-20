import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 160px;

  img {
    max-width: 100%;
  }
`

export const Wrapper = styled.div`
  max-width: 1397px;
  margin: 0 auto;
  padding: 0 16px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Panel = styled.div`
  display: grid;
  grid-template-columns: 65fr 35fr;
`

export const Column = styled.div``

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 13px;
  margin: 0 auto;
  max-width: 694px;
  padding: 10px 0 10px 0;
`

export const Description = styled.div`
  padding: 30px 32px 32px 32px;
  max-width: 426px;
  display: flex;
  flex-direction: column;

  b {
    padding-bottom: 20px;
    font-size: 20px;
    color: #333333;
  }

  p {
    font-size: 13px;
    color: #727272;
  }
`
