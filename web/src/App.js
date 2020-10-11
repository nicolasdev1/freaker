import React, { useEffect, useState } from 'react'

import api from './services/api'

import Button from './components/Button'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    function handleProducts() {
      api.get('products').then(({ data }) => {
        setProducts(data)
      })
    }

    setTimeout(handleProducts, 1000)
  }, [products])

  if (!products.length) return <h1>Carregando dados...</h1>

  return (
    <>
      {products.map(product => (
        <h1>{product.name}</h1>
      ))}

      <Button
        title="Próximo"
      />
    </>
  )
}

export default App
