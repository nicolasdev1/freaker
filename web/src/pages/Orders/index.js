import React, { useState, useEffect } from 'react'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import CardOrders from '../../components/CardOrders'
import IconSearch from '../../components/IconSearch'
import Footer from '../../components/Footer'
import CardProducts from '../../components/CardProducts'

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

  function handleCreateOrder(event) {
    event.preventDefault()
  }

  const onChange = (event) => {
    setResult(event.target.value)
  }

  return (
    <Container>
      <Header />
      <Profile />
      <NavBar page="Pedidos" />

      <Form onSubmit={handleCreateOrder}>
        <Search>
          <h1>Fazer um pedido</h1>
          <WrapperInput>
            <MenuSearch>
              <span>
                <IconSearch />
              </span>
              <input
                type="search"
                placeholder="Buscar cliente"
                onChange={onChange}
              />
            </MenuSearch>
          </WrapperInput>
          {customer.map((res, index) => (
            <h1 key={res.index}>{res.name}</h1>
          ))}
        </Search>

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
