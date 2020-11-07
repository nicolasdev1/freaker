import React, { useState, useEffect } from 'react'

import Search from '../../components/Search'
import Status from '../../components/Status'

import { Products, CardItem, Price } from './styles'

import api from '../../services/api'

const CardProducts = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)

      setFilteredProducts(response.data)

      setLoading(false)
    })
  }, [])

  return (
    <>
      <Search
        placeholder="Buscar produtos"
        dataToFilter={products}
        hasNotFound={setNotFound}
        onFiltered={setFilteredProducts}
      />

      <Status title="Nenhum produto encontrado" show={notFound} />
      <Status title="Carregando..." show={loading} />

      <Products>
        {filteredProducts.map((product) => (
          <CardItem key={product.id}>
            <img src={product.images[0]} alt={product.name} />
            <span>{product.name}</span>

            <Price>
              <span>
                {product.sale_price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </Price>
          </CardItem>
        ))}
      </Products>
    </>
  )
}

export default CardProducts
