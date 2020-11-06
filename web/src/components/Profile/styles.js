import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 19px;

  > h2 {
    font-size: 22px;
    font-weight: 400;

    line-height: 26px;

    margin: 11px 0 5px;
  }

  > strong {
    font-size: 16px;
    font-weight: 700;
  }
` 

export const Avatar = styled.div`
  width: 94px;
  height: 94px;

  background: url('/images/icons/user.svg') no-repeat;

  border:  2px solid #d3d3d3;

  border-radius: 50%;
` 
