import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  width: fit-content;

  text-decoration: none;

  box-shadow: ${({ theme: { title } }) => title === 'dark' ? '2px 2px 2px 1px rgba(255, 255, 255, 0.2)' : '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'};

  padding: 10px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  border-radius: 5px;

  user-select: none;
  cursor: pointer;

  background: ${({ activeTab, theme: { colors } }) => activeTab ? '#000' : colors.background};

  > span {
    margin-left: 12px;

    color: ${({ theme: { colors } }) => colors.text};
  }
`
