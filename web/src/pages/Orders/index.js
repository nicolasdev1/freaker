import React, { useState, useEffect } from 'react'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import CardOrders from '../../components/CardOrders'
import Footer from '../../components/Footer'
import CardProducts from '../../components/CardProducts'

<<<<<<< HEAD
import {
  Form,
  Products,
  CardItem,
  Price,
  Enter,
} from './styles'

const Orders = () => {
=======
import api from '../../services/api'

import { Form, Search, WrapperInput, MenuSearch, Enter } from './styles'

const Orders = () => {
  const [customer, setCustomer] = useState([])
  const [filterCustomer, setFilterCustomer] = useState([])
  const [result, setResult] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/users').then((response) => {
      setCustomer(response.data)
      setFilterCustomer(response.data)
    })
  }, [])

  useEffect(() => {
    const results = filterCustomer.filter((response) => {
      return response.name.toLowerCase().includes(result)
    })
    setCustomer(results)
  }, [result])

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)
    })
  }, [])

>>>>>>> a01f7ec4e743304a5f0ec87198af9028621c4690
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

        <CardProducts />

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
