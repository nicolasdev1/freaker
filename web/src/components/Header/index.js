import React from 'react';

import {
  Container,
  Wrapper,
  ContentLeft,
  ContentCenter,
  ContentRight,
  IconAddCircle,
  IconShopping,
  WrapperBar,
  Main,
} from './styles';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <ContentLeft>
          <IconAddCircle />
        </ContentLeft>
        <ContentCenter>
          <h1>Freaker</h1>
          <img src="/images/icons/freaker.svg" alt="Freaker" />
        </ContentCenter>
        <ContentRight>
          <IconShopping />
        </ContentRight>
      </Wrapper>

      <TopBar />
    </Container>
  );
};

const TopBar = () => (
  <WrapperBar>
    <Main>
      <span>OFERTAS</span>
      <span>LANÇAMENTOS</span>
      <span>MASCULINO</span>
      <span>FEMININO</span>
    </Main>
  </WrapperBar>
);

export default Header;
