import React, { useState, useEffect } from 'react'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import CardOrders from '../../components/CardOrders'
import IconSearch from '../../components/IconSearch'
import Footer from '../../components/Footer'

import api from '../../services/api'

import {
  Form,
  Search,
  WrapperInput,
  MenuSearch,
  Products,
  CardItem,
  Price,
  Enter,
} from './styles'

const Orders = () => {
  const [customer, setCustomer] = useState([])
  const [filterCustomer, setFilterCustomer] = useState([])
  const [result, setResult] = useState('')

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

  useEffect(() => {}, [])

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
