import styled from 'styled-components'

export const Form = styled.div`
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

  .grid {
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 20px 170px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40%;
  margin-top: 30px;
`


