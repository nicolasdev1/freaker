import React from 'react';

import {
  Container,
  Wrapper,
  ContentLeft,
  ContentCenter,
  ContentRight,
  IconMoon,
  IconShopping,
  WrapperBar,
  Main,
} from './styles';

const Header = () => {
  return (
    <Container>
      <Wrapper>

        <ContentLeft>
          <IconMoon />
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
      <span>INICIO</span>
      <span>PEDIDOS</span>
      <span>PRODUTOS</span>
      <span>CLIENTES</span>
    </Main>
  </WrapperBar>
);

export default Header;
