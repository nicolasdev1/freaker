import styled from 'styled-components'

export const Content = styled.div`
  h1 {
    margin-top: 30px;
  }
`

export const Listing = styled.div``

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  margin-top: 50px;

  h1 {
    padding-bottom: 6px;
  }
  p {
    padding-bottom: 18px;
  }
`

export const Line = styled.div`
  margin-top: 50px;
  border-bottom: 1px solid #d3d3d3;
`

export const Enter = styled.button`
  display: flex;
  align-items: center;

  overflow: hidden;

  width: 100%;
  height: 62px;
  max-width: 350px;

  text-decoration: none;

  border-radius: 8px;

  background-color: #e04e5b;
  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background-color: #ba3c47;
  }

  > strong {
    font-size: 16px;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin-top: 15px;

    label {
      display: flex;
      flex-direction: row;
      align-self: flex-start;

      color: #a8a8b3;

      padding-bottom: 6px;
    }

    input {
      max-width: 500px;
      width: 100%;
      padding: 20px 0 20px 20px;
      border: 1px solid #e3e3e3;
      border-radius: 5px;
      color: #3a3a3a;

      font-size: 1rem;

      &::placeholder {
        font-size: 1rem;
        color: #a8a8b3;
      }
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40%;
  margin-top: 30px;
`
