import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 0 72px 0 83px;

  height: 98px;
`

export const Title = styled.h1`
  font-size: 39px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.text};
`
