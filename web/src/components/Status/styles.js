import styled from 'styled-components'

export const Container = styled.div`
  display: ${({ show }) => show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 200px;

  margin: 30px 0;
`
