import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  background: ${({ theme: { colors } }) => colors.rgba};
`

export const Container = styled.div`
  width: 30%;
  height: fit-content;

  border-radius: 20px;

  box-shadow: 1px 1px 10px 1px ${({ theme: { colors } }) => colors.rgba};

  background: ${({ theme: { colors } }) => colors.background};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  padding: 40px;

  height: 100%;

  > h2 {
    font-size: 26px;
    margin-bottom: 30px;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: center;

  height: 50px;

  > div {
    &:last-child {
      margin-left: 30px;
    }
  }
`
