import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 347px;
  height: fit-content;

  border: 1px solid ${({ theme: { colors } }) => colors.rgba};
  border-radius: 10px;

  background: ${({ theme: { colors } }) => colors.primary};
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;

  padding-left: 14px;

  height: 60px;

  border-bottom: 1px solid ${({ theme: { colors } }) => colors.rgba};
  border-radius: 10px 10px 0 0;

  /* background: ${({ theme: { colors } }) => colors.background}; */
`

export const Title = styled.h2`
  font-weight: 500;
`

export const CardBody = styled.div`
  padding: 14px;

  span {
    font-size: 16px;
    font-weight: 400;
  }
`

export const Salary = styled.h3`
  font-size: 17px;
`

export const DateBirth = styled.h3`
  font-size: 17px;
`

export const Status = styled.h3`
  font-size: 17px;
`

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 6px;

  height: 60px;

  border-top: 1px solid ${({ theme: { colors } }) => colors.rgba};
`
