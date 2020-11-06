import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  
  > form {
    display: flex;
    flex-direction: column;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;

  margin-top: 30px;

  > div {
    &:last-child {
      margin-left: 30px;
    }
  }
`
