import React from 'react'

import * as ROUTES from '../../constants/routes'

import { Wrapper, Container, Header, Main, Enter } from './styles'

const Landing = () => {
  return (
    <Wrapper>
      <Container>
      <Header>
        <img src="/images/icons/freaker-food.svg" alt="Freaker Food" />
      </Header>

      <Main>
        <h1>Pronto para gerenciar seu restaurante?</h1>
        <p>Prestamos serviço para pessoas que buscam levar o seu restaurante para a internet.</p>

        <Enter to={ROUTES.ORDERS}>
          <span>
            <img src="/images/icons/enter.svg" alt="Entrar"/>
          </span>

          <strong>Quero gerenciar meu negócio</strong>
        </Enter>
      </Main>
    </Container>
    </Wrapper>
  )
}

export default Landing
