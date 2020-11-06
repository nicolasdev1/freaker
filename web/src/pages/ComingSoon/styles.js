import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: url('/images/coming-soon.svg') no-repeat 85% 50%;
  background-size: 950px;

  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 50vh;

    max-width: 50%;
    width: 100%;

    > button {
      width: 40px;
      margin: 40px 0 0 104px;

      font-size: 18px;

      background: none;
      outline: none;
      cursor: pointer;

      > img {
        width: 42px;
      }
    }
  }
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;


  font-size: 54px;
`
