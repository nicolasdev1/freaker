import React from 'react'

import {
  Container,
  Header,
  Logo,
  Main,
  Cities,
  About,
  Restaurants,
  Bottom, 
  Terms,
  Separator,
  Copyright
} from './styles'

const Footer = () => {
  return (
    <Container>
      <Header>
        <Logo src="/images/icons/freaker-food.svg" />
      </Header>

      <Main>
        <Cities>
          <strong>
            Mostrar todas as cidades
            <img src="/images/icons/down-arrow.svg" alt="Seta para baixo"/>
          </strong>

          <div>
            <a href="">FAQs</a>
            <a href="">Nosso blog de receitas</a>
          </div>
        </Cities>

        <About>
          <div>
            <a href="">Sobre o Freaker Food</a>
            <a href="">Se tornar um parceiro de entrega</a>
            <a href="">Se tornar um parceiro de restaurante</a>
          </div>

          <a href="">Fale conosco</a>
        </About>

        <Restaurants>
          <strong>
            Mostrar todos os restaurantes
            <img src="/images/icons/down-arrow.svg" alt="Seta para baixo" />
          </strong>

           
        </Restaurants>
      </Main>

      <Bottom>
        <Terms>
          <a>Termos e condições</a>
          <Separator />
          <a>Política de privacidade</a>
        </Terms>

        <Copyright>
          © Copyright 2020 - Freaker Food - Todos os direitos reservados Freaker Food S.A.
        </Copyright>
      </Bottom>
    </Container>
  )
}

export default Footer
