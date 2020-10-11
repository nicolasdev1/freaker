import React from 'react'

import {
  Container,
  Wrapper,
  ContentLeft,
  ContentCenter,
  ContentRight
} from './styles'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <ContentLeft>

        </ContentLeft>
        <ContentCenter>
          <img
            src="/images/icons/freaker.svg"
            alt="Freaker"
          />
        </ContentCenter>
        <ContentRight>

        </ContentRight>
      </Wrapper>
    </Container>
  )
}

export default Header
