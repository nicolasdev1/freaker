import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import CardsGrid from '../../components/CardsGrid'
import Title from '../../components/Title'
import Line from '../../components/Line'
import Button from '../../components/Button'

import api from '../../services/api'

import {
  Content,
  Listing,
  Form,
  ButtonContainer,
  Enter,
  Wrapper
} from './styles'

const Products = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [cost_price, setCostPrice] = useState('')
  const [sale_price, setSalePrice] = useState('')
  const [stock, setStock] = useState('')

  const history = useHistory()

  async function handleCreateProduct(event) {
    event.preventDefault()

    try {
      const data = {
        name,
        images: [
          image
        ],
        cost_price: parseInt(cost_price),
        sale_price: parseInt(sale_price),
        stock: parseInt(stock)
      }

      await api.post('/products', data)

      alert('Produto cadastrado com sucesso.')
    } catch (err) {
      console.log(err)
      alert('Erro no cadastro!')
    }

    history.go()
  }

  return (
    <Container>
      <Header />
      <Profile />
      <NavBar active="Produtos" />

      <Content>
        <Listing>
          <Title text="Lista de produtos" />

          <CardsGrid
            entity="product"
            gridRepeat={4}
            selectable={false}
          />
        </Listing>
        <Line />

        <Form>
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
              type="number"
              value={sale_price}
              onChange={(event) => setSalePrice(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="stock">Estoque</label>
            <input
              type="number"
              value={stock}
              onChange={(event) => setStock(event.target.value)}
            />
          </div>
          </Wrapper>

          <ButtonContainer>
            <Button
              icon="/images/icons/enter.svg"
              title="Cadastrar produto"
              onClick={handleCreateProduct}
            />
          </ButtonContainer>

        </Form>
      </Content>
      <Footer />
    </Container>
  )
}

export default Products
