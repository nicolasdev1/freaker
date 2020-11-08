import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 300px;

  border: 1px solid #d3d3d3;
  border-radius: 8px;

  transition: background-color .2s;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;

  padding: 8px 17px;

  > div {
    display: flex;
    flex-direction: row;

    margin-top: 8px;

    > span {
      font-weight: 500;
      margin-right: 6px;
    }

    &:last-of-type {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 3px;

      overflow-y: auto;

      > span {
        font-weight: 400;
      }
    }
  }

  > span {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 16px;
    font-weight: 500;

    margin-top: 10px;

    &:first-child {
      font-size: 23px;
    }

    > strong {
      margin-left: 6px;
      font-size: 18px;
    }

    > img {
      width: 32px;

      margin-right: 8px;

      border-radius: 50%;
      border: 1px solid #d3d3d3;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 20%;

  > button {
    width: 100%;

    font-size: 17px;
    color: #fff;
    border-top: 1px solid #d3d3d3;

    cursor: pointer;

    transition: background-color .2s;

    &:first-of-type {
      border-right: 1px solid #d3d3d3;
      border-bottom-left-radius: 6px;

      background: rgba(35, 78, 125, 0.90);

      &:hover {
        background: #234e7d;
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
