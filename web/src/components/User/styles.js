import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 250px;

  border: 1px solid #d3d3d3;
  border-radius: 8px;

  transition: background-color .2s;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 13px;

  height: 75%;

  > span {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 17px;
    font-weight: 500;

    > label {
      margin-left: 6px;
      font-size: 14px;
    }

    > img {
      width: 32px;

      margin-right: 8px;

      border-radius: 50%;
      border: 1px solid #d3d3d3;
    }
  }

  > p {
    margin-top: 7px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 25%;

  > button {
    width: 100%;

    font-size: 15px;
    color: #fff;
    border-top: 1px solid #d3d3d3;

    cursor: pointer;

    transition: background-color .2s;

    &:first-of-type {
      border-right: 1px solid #d3d3d3;
      border-bottom-left-radius: 6px;

      background: rgba(63, 61, 86, 0.95);

      &:hover {
        background: #3f3d56;
      }
    }

    &:last-of-type {
      border-bottom-right-radius: 6px;

      background: rgba(220, 53, 69, 0.89);

      &:hover {
        background: #dc3545;
      }
    }
  }
`
