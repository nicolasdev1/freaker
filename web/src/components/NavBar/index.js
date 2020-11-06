import React, { useState } from 'react'
import * as ROUTES from '../../constants/routes'

import Item from './Item'

import { Wrapper, Container } from './styles'

const NavBar = ({ page = 'Visão geral' }) => {
  const items = [
    {
      id: 1,
      title: 'Visão geral',
      to: ROUTES.DASHBOARD,
      active: false
    },
    {
      id: 2,
      title: 'Informações da conta',
      to: ROUTES.COMING_SOON,
      active: false
    },
    {
      id: 3,
      title: 'Pedidos',
      to: ROUTES.COMING_SOON,
      active: false
    },
    {
      id: 4,
      title: 'Produtos',
      to: ROUTES.PRODUCTS,
      active: false
    },
    {
      id: 5,
      title: 'Clientes',
      to: ROUTES.COMING_SOON,
      active: false
    },
    {
      id: 6,
      title: 'Estatísticas',
      to: ROUTES.COMING_SOON,
      active: false
    },
    {
      id: 7,
      title: 'Sair',
      to: ROUTES.DEFAULT,
      active: false
    },
  ]

  items.map(item => {
    if (item.title === page) {
      item.active = true
    }
  })

  return (
    <Wrapper>
      <Container>
        {items.map(item =>
          <Item
            key={item.id}
            title={item.title}
            to={item.to}
            active={item.active}
          />
        )}
      </Container>
    </Wrapper>
  )
}

export default NavBar
