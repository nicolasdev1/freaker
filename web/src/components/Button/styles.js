import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ height }) => height};
  width: ${({ width }) => width};

  cursor: pointer;
  user-select: none;

  border-radius: 10px;

  background: ${({ color }) => color === 'red' ? '#e10050' : color === 'blue' ? '#1976d2' : color === 'green' && '#10CD45'};

  &:hover {
    background: ${({ color }) => color === 'red' ? '#bf0345' : color === 'blue' ? '#1664ad' : color === 'green' && '#14ad3d'};
  }

  > img {
    margin-right: 10px;
  }

  > button {
    font-size: 14px;
    font-weight: 600;
    color: #fff;

    text-transform: uppercase;

    cursor: pointer;
  }
`
