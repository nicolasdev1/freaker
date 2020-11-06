import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin-bottom: 20px;

  > input {
    width: 100%;
    height: 100%;

    font-size: 16px;

    background: ${({ theme: { colors } }) => colors.text};
    color: ${({ theme: { colors } }) => colors.background};
    opacity: .9;

    padding: 10px;

    border-radius: 5px;
  }

  > label {
    display: flex;
    justify-content: flex-start;

    > span {
      display: flex;

      > p {
        font-size: 13px;

        opacity: 0.9;

        margin-left: 4px;
        margin-top: 4px;
      }
    }
  }
`
