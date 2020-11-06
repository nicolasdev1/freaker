import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const Enter = styled(Link)`
  display: flex;
  align-items: center;

  overflow: hidden;

  width: 100%;
  height: 62px;
  max-width: 350px;

  text-decoration: none;

  border-radius: 8px;
  margin-top: 40px;

  background-color: #e04e5b;
  transition: background-color .2s;

  &:hover {
    background-color: #ba3c47;
  }

  > strong {
    flex: 1;

    text-align: center;
    font-weight: 500;
    color: #fff;
  }

  > span {
    display: flex;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.08);

    width: 72px;
    height: 100%;

    > img {
      width: 24px;
    }
  }
`
