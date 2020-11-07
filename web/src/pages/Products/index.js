import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import CardProducts from '../../components/CardProducts'

import api from '../../services/api'

import { Content, Listing, Form, Line, ButtonContainer, Enter, Wrapper } from './styles'

const Products = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [cost_price, setCostPrice] = useState(0)
  const [sale_price, setSalePrice] = useState(0)
  const [stock, setStock] = useState(0)

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = {
        name,
        images: [
          image
        ],
        cost_price,
        sale_price,
        stock
      }

      await api.post('products', data)

      alert('Produto cadastrado com sucesso.')
      history.go()
    } catch (err) {
      console.log(err)
      alert('Erro no cadastro!')
    }
  }

  return (
    <Container>
      <Header />
      <Profile />
<<<<<<< HEAD
      <NavBar active="Produtos" />
      <Totals />
      <AccountInformation />
      <RecentActivities />
      <CardOrders />
=======
      <NavBar page="Produtos" />

      <Content>
        <Listing>
          <h1>Produtos</h1>

          <CardProducts />
        </Listing>
        <Line />

        <Form onSubmit={handleSubmit}>
          <h1>Criar um novo produto</h1>
          <p>Forneça os dados necessários para criar um produto</p>

        <Wrapper>
          <div>
            <label htmlFor="name">Nome do produto</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="images">Url da imagem</label>
            <input
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cost_price">Preço de custo</label>
            <input
              type="number"
              value={cost_price}
              onChange={(event) => setCostPrice(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="sale_price">Preço de venda</label>
            <input
              type="text"
              value={sale_price}
              onChange={(event) => setSalePrice(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="stock">Estoque</label>
            <input
              type="text"
              value={stock}
              onChange={(event) => setStock(event.target.value)}
            />
          </div>
          </Wrapper>

          <ButtonContainer>
            <Enter type="submit">
              <span>
                <img src="/images/icons/enter.svg" alt="Entrar" />
              </span>

              <strong>Cadastrar produto</strong>
            </Enter>
          </ButtonContainer>
          
        </Form>
      </Content>
>>>>>>> a01f7ec4e743304a5f0ec87198af9028621c4690
      <Footer />
    </Container>
  )
}

export default Products
