import React, { useState, useEffect } from 'react'

import { Products, CardItem, Price } from './styles'

import api from '../../services/api'

const CardProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)

      console.log(response.data)
    })
  }, [])

  return (
    <Products>
      {products.map((product) => (
        <CardItem key={product.id}>
          <img src={product.images[0]} alt={product.name} />
          <span>{product.name}</span>

          <Price>
            <span>R${product.sale_price}</span>
          </Price>
        </CardItem>
      ))}
    </Products>
  )
}

export default CardProducts
