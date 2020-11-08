import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import CardsGrid from '../../components/CardsGrid'
import Title from '../../components/Title'
import Button from '../../components/Button'

import api from '../../services/api'

import { Form } from './styles'

const Orders = () => {
  const [selectedUser, setSelectedUser] = useState(Number)
  const [selectedProducts, setSelectedProducts] = useState([])

  const history = useHistory()

  const handleCreateOrder = async () => {
    try {
      const data = {
        user_id: selectedUser,
        products: selectedProducts
      }

      await api.post('/orders', data)

      history.go()
      alert('Pedido efetuado com sucesso.')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(selectedUser)
  }, [selectedUser])

  return (
    <Container>
      <Header />
      <Profile />
      <NavBar active="Pedidos" />

      <Title text="Lista de pedidos" />

      <CardsGrid
        entity="order"
        gridColumns="repeat(2, 1fr)"
      />

      <Form>
        <Title text="Efetuar um pedido" />

        <h3 style={{ marginTop: 20 }}>Selecione um cliente para o seu pedido</h3>

        <CardsGrid
          entity="user"
          gridColumns="repeat(3, 1fr)"
          buttons={false}
          currentSelectedUser={setSelectedUser}
        />

        <h3>Selecione um ou mais produtos para o seu pedido</h3>

        <CardsGrid
          entity="product"
          gridColumns="repeat(4, 1fr)"
          currentSelectedProducts={setSelectedProducts}
        />

        <Button
          onClick={handleCreateOrder}
          icon="/images/icons/cart.svg"
          title="Finalizar pedido"
        />
      </Form>
      <Footer />
    </Container>
  )
}

export default Orders
