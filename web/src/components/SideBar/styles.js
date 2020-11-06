import styled from 'styled-components'

export const Container = styled.div`
  grid-area: SB;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 52px 0 52px 33px;

  background: ${({ theme: { colors } }) => colors.primary};
`

export const Top = styled.div`
  
`

export const Bottom = styled.div`
  
`
