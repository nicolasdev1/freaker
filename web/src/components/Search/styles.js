import styled from 'styled-components'

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
    padding: 20px 20px 20px 78px;

    border: 1px solid #d3d3d3;

    border-radius: 5px;
    color: #3a3a3a;

    font-size: 1rem;

    &:focus {
      border: 1px solid #3f3d56;
    }

    &::placeholder {
      font-size: 1rem;
      color: #a8a8b3;
    }
  }
`
