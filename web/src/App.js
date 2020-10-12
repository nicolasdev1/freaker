import React, { useEffect, useState } from 'react'

import api from './services/api'

import GlobalStyles from './styles/GlobalStyles'

import Button from './components/Button'
import Header from './components/Header'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    function handleProducts() {
      api.get('products').then(({ data }) => {
        setProducts(data)
      })
    }
  }, [products])

  if (!products.length) return <h1>Carregando dados...</h1>

  return (
    <>
      <Header />
      {products.map(product => (
        <h1>{product.name}</h1>
      ))}

      <Button
        title="Próximo"
      />
      <GlobalStyles />
    </>
  )
}

export default App
