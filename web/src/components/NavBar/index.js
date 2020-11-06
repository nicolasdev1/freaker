import React from 'react'

import * as ROUTES from '../../constants/routes'

import Item from './Item'

import { Wrapper, Container } from './styles'

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <Item to={ROUTES.DEFAULT} title="Visão geral" active />
        <Item to={ROUTES.COMING_SOON} title="Informações da conta" />
        <Item to={ROUTES.COMING_SOON} title="Pedidos" />
        <Item to={ROUTES.COMING_SOON} title="Produtos" />
        <Item to={ROUTES.COMING_SOON} title="Clientes" />
        <Item to={ROUTES.COMING_SOON} title="Estatísticas" />
        <Item to={ROUTES.DEFAULT} title="Sair" />
      </Container>
    </Wrapper>
  )
}

export default NavBar
