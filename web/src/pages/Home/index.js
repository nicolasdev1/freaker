import React, { useCallback, useEffect, useState } from 'react'

import api from '../../services/api'

import Button from '../../components/Button'
import Header from '../../components/Header'

import { Container } from './styles'

const Home = () => {
  const [products, setProducts] = useState([
    {
      name: 'Produto 1',
    },
  ])

  // const handleGetProducts = useCallback(async () => {
  //   const { data } = await api.get('products');

  //   setProducts(data);
  // }, []);

  // useEffect(() => {
  //   setTimeout(handleGetProducts, 0);
  // }, [handleGetProducts]);

  if (!products.length) return <h1>Carregando dados...</h1>

  return (
    <Container>
      <Header />
      {products.map((product) => (
        <h1>{product.name}</h1>
      ))}

      <Button title="Próximo" />
    </Container>
  )
}

export default Home
