import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #3f3d56;

  cursor: pointer;
  height: 100%;

  margin-top: 4px;
`

export const Line = styled.div`
  width: 35px;
  height: 2px;

  margin-top: 6px;

  background-color: ${({ active }) => active ? '#e04e5b' : 'transparent'};

  transition: background-color .2s;

  &:hover {
    background-color: #e04e5b;
  }
`
