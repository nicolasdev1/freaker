import React, { useState, useEffect } from 'react'

import Search from '../../components/Search'
import Status from '../../components/Status'

import { Products, CardItem, Price } from './styles'

import api from '../../services/api'

const CardProducts = ({ items = () => {} }) => {
  const [selectedItems, setSelectedItems] = useState([])

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

  function handleSelectItem(id) {

    // findIndex retorna valor igual ou acima de 0 se o que estou buscando estiver dentro do array
    const alreadySelected = selectedItems.findIndex(product => product === id)

    if (alreadySelected >= 0) {
        // nessa variável estou filtrando a lista de itens selecionados e pegando apenas aquele item que for diferente do id que quero remover
        const filteredItems = selectedItems.filter(product => product !== id)

        setSelectedItems(filteredItems)
    } else {
        setSelectedItems([ ...selectedItems, id ])
    }

    items(selectedItems)
}

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
          <CardItem
            key={product.id}
            onClick={() => handleSelectItem(product.id)}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className={selectedItems.includes(product.id) ? 'selected' : ''}
            />
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
