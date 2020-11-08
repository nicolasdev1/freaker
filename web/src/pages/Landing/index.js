import React from 'react'

import * as ROUTES from '../../constants/routes'

import Button from '../../components/Button'

import {
  Wrapper,
  Container,
  Header,
  Main
} from './styles'

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

        <Button
          to={ROUTES.ORDERS}
          icon="/images/icons/enter.svg"
          title="Quero gerenciar meu negócio"
        />
      </Main>
    </Container>
    </Wrapper>
  )
}

export default Landing
