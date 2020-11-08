import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
`

export const Search = styled.div`
  margin-top: 30px;
`

export const WrapperInput = styled.div`
  position: relative;
  flex: 3;
  align-items: center;
  max-width: 500px;
`

export const MenuSearch = styled.div`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    left: 20px;
    top: 60%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    pointer-events: none;
  }

  input {
    margin-top: 20px;
    width: 100%;
    padding: 20px 0 20px 78px;

    border: 1px solid #e3e3e3;
    border-radius: 5px;
    color: #3a3a3a;

    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
      color: #a8a8b3;
    }
  }
`
