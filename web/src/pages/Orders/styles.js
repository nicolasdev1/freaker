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
export const Enter = styled.button`
  display: flex;
  align-items: center;

  overflow: hidden;

  width: 100%;
  height: 62px;
  max-width: 350px;

  text-decoration: none;

  border-radius: 8px;
  margin-top: 65px;

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
