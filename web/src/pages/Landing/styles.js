import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto;

  max-width: 1750px;

  background: url('/images/landing.svg') no-repeat 90% 60%;

  @media screen and (max-width: 1400px) {
    background: none;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;

  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1400px) {
    align-items: center;
  }
`

export const Header = styled.div`
  margin: 48px 0 0;

  > img {
    width: 202px;
  }

  @media screen and (max-width: 1400px) {
    > img {
      width: 302px;
    }
  }

  @media screen and (max-width: 1100px) {
    > img {
      width: 202px;
    }
  }
`

export const Main = styled.main`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 8px;

  @media screen and (max-width: 1400px) {
    align-items: center;
    max-width: unset;
  }

  > h1 {
    font-size: 54px;
  }

  > p {
    font-size: 24px;
    line-height: 38px;

    margin-top: 24px;
  }
`
