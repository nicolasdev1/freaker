import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto;

  max-width: 1750px;

  background: url('/images/landing.svg') no-repeat 950px 60%;
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
`

export const Header = styled.div`
  margin: 48px 0 0;

  > img {
    width: 202px;
  }
`

export const Main = styled.main`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 8px;

  > h1 {
    font-size: 54px;
  }

  > p {
    font-size: 24px;
    line-height: 38px;

    margin-top: 24px;
  }
`
