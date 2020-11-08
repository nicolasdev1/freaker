import styled from 'styled-components'

export const Wrapper = styled.div`
  border: ${({ selected }) => selected ? '3px solid #e04e5b' : '3px solid transparent'};
  border-radius: 11px;

  user-select: none;
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: ${({ selected }) => selected ? '0px solid transparent' : '1px solid #d3d3d3'};;

  width: 100%;
  height: ${({ buttons }) => buttons ? '250px' : '100%'};

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
