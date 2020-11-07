import React, { useState, useEffect } from 'react'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import CardOrders from '../../components/CardOrders'
import Footer from '../../components/Footer'

import {
  Form,
  Products,
  CardItem,
  Price,
  Enter,
} from './styles'

const Orders = () => {
  function handleCreateOrder(event) {
    event.preventDefault()
  }

  return (
    <Container>
      <Header />
      <Profile />
      <NavBar active="Pedidos" />

      <Form onSubmit={handleCreateOrder}>
        <h1>Fazer um pedido</h1>

        <Products>
          <CardItem>
            <img
              src="https://burgerx.com.br/assets/img/galeria/burgers/triple-x.jpg"
              alt="Product"
            />
            <span>
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
            </span>

            <Price>
              <span>R$20,00</span>
            </Price>
          </CardItem>
          <CardItem>
            <img
              src="https://burgerx.com.br/assets/img/galeria/burgers/triple-x.jpg"
              alt="Product"
            />
            <span>
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
            </span>

            <Price>
              <span>R$20,00</span>
            </Price>
          </CardItem>
          <CardItem>
            <img
              src="https://burgerx.com.br/assets/img/galeria/burgers/triple-x.jpg"
              alt="Product"
            />
            <span>
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
            </span>

            <Price>
              <span>R$20,00</span>
            </Price>
          </CardItem>
          <CardItem>
            <img
              src="https://burgerx.com.br/assets/img/galeria/burgers/triple-x.jpg"
              alt="Product"
            />
            <span>
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
            </span>

            <Price>
              <span>R$20,00</span>
            </Price>
          </CardItem>
          <CardItem>
            <img
              src="https://burgerx.com.br/assets/img/galeria/burgers/triple-x.jpg"
              alt="Product"
            />
            <span>
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
            </span>

            <Price>
              <span>R$20,00</span>
            </Price>
          </CardItem>
          <CardItem>
            <img
              src="https://burgerx.com.br/assets/img/galeria/burgers/triple-x.jpg"
              alt="Product"
            />
            <span>
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
            </span>

            <Price>
              <span>R$20,00</span>
            </Price>
          </CardItem>
          <CardItem>
            <img
              src="https://burgerx.com.br/assets/img/galeria/burgers/triple-x.jpg"
              alt="Product"
            />
            <span>
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
              X-burguer picanha, alface, queijo, bacon,dwqdqwnjkwdqwdiwqndn
            </span>

            <Price>
              <span>R$20,00</span>
            </Price>
          </CardItem>
        </Products>

        <Enter type="submit">
          <span>
            <img src="/images/icons/enter.svg" alt="Entrar" />
          </span>

          <strong>Finalizar pedido</strong>
        </Enter>
      </Form>

      <CardOrders />
      <Footer />
    </Container>
  )
}

export default Orders
