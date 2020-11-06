import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 123px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  border-bottom: 2px solid #e04e5b;
`

export const Logo = styled.img`
  margin: 0 53px 12px 32px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 29px 53px 73px 32px;
`

export const Cities = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 16px;
    line-height: 28px;
    font-weight: 700;

    cursor: pointer;

    > img {
      width: 14px;

      margin-left: 9px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;

    margin-top: 72px;

    > a {
      text-decoration: none;

      font-size: 16px;
      font-weight: 700;
      line-height: 28px;

      color: #3f3d56;
    }
  }
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 700;
  line-height: 28px;

  > div {
    display: flex;
    flex-direction: column;

    > a {
      text-decoration: none;
      color: #3f3d56;
    }
  }

  > a {
    text-decoration: none;
    color: #3f3d56;
  }
`

export const Restaurants = styled.div`
  > strong {
    display: flex;
    align-items: center;
    
    cursor: pointer;

    > img {
      width: 14px;

      margin-left: 9px;
    }
  }
`

export const Terms = styled.div`
  
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;

  border-top: 2px solid #e04e5b;
`

export const Separator = styled.div`
  
`

export const Copyright = styled.span`
  
`
