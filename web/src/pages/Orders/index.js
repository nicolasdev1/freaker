import React, { useState, useEffect } from 'react'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import CardProducts from '../../components/CardProducts'
import Title from '../../components/Title'

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
        <Title text="Efetuar um pedido" />

        <CardProducts />

        <Enter type="submit">
          <span>
            <img src="/images/icons/enter.svg" alt="Entrar" />
          </span>

          <strong>Finalizar pedido</strong>
        </Enter>
      </Form>
      <Footer />
    </Container>
  )
}

export default Orders
