import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  height: 131px;
` 

export const Logo = styled.img`
  width: 131px;

  margin-top: 19px;
` 

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  > span {
    font-size: 17px;
    line-height: 18px;

    margin-left: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 111px;
  }
`

export const Avatar = styled.div`
  width: 38px;
  height: 38px;
  
  border: 2px solid #e3e3e3;
  border-radius: 50%;

  background: url('/images/icons/user.svg') no-repeat;
`
