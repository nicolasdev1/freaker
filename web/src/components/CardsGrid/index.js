import React, { useState, useEffect } from 'react'

import Product from '../../components/Product'
import User from '../User'
import Order from '../../components/Order'
import Search from '../../components/Search'
import Status from '../../components/Status'

import { Grid } from './styles'

import api from '../../services/api'


const CardsGrid = ({
  selectable = true,
  entity,
  buttons = true,
  gridColumns = 'repeat(4, 1fr)',
  currentSelectedProducts = () => {},
  currentSelectedUser = () => {}
}) => {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedUser, setSelectedUser] = useState(Number)

  const [receivedData, setReceivedData] = useState([])
  const [filteredReceivedData, setFilteredReceivedData] = useState([])

  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/${entity}s`).then((response) => {
      setReceivedData(response.data)

      setFilteredReceivedData(response.data)

      setLoading(false)
    })
  }, [])

  const handleSelectUser = (id) => {
    if (!selectable) return

    const alreadySelected = selectedUser === -1

    if (!alreadySelected) {
      setSelectedUser(id)
    } else {
      setSelectedUser(-1)
    }

    currentSelectedUser(id)
  }

  function handleSelectProduct(id) {
    if (!selectable) return

    // findIndex retorna valor igual ou acima de 0 se o que estou buscando estiver dentro do array
    const alreadySelected = selectedProducts.findIndex(item => item === id)

    if (alreadySelected >= 0) {
      // nessa variável estou filtrando a lista de itens selecionados e pegando apenas aquele item que for diferente do id que quero remover
      const filteredItems = selectedProducts.filter(item => item !== id)

      setSelectedProducts(filteredItems)
    } else {
      setSelectedProducts([ ...selectedProducts, id ])
    }

    currentSelectedProducts(selectedProducts)
}

  return (
    <>
      <Search
        placeholder={`Buscar ${entity === 'product' ? 'produto' : entity === 'user' ? 'cliente' : 'pedido'}s ${entity === 'order' ? 'por nome do cliente' : ''}`}
        entity={entity}
        dataToFilter={receivedData}
        hasNotFound={setNotFound}
        onFiltered={setFilteredReceivedData}
      />

      <Status title={`Nenhum ${entity === 'product' ? 'produto' : entity === 'user' ? 'cliente' : 'pedido'} encontrado`} show={notFound} />

      <Status title="Carregando..." show={loading} />

      <Grid gridColumns={gridColumns}>
        {filteredReceivedData.map((item) => (
          entity === 'product' ?
            <Product
              key={item.id}
              data={item}
              selected={selectable && selectedProducts.includes(item.id) && true}
              onClick={() => handleSelectProduct(item.id)}
            />
          : entity === 'user' ?
            <User
              key={item.id}
              data={item}
              buttons={buttons}
              selected={selectable && selectedUser === item.id && true}
              onClick={() => handleSelectUser(item.id)}
              onDelete={(id) => {
                  setFilteredReceivedData(filteredReceivedData.filter(item => item.id !== id))
                  setReceivedData(filteredReceivedData.filter(item => item.id !== id))
                }
              }
            />
          :
          <Order
            key={item.id}
            data={item}
            onDelete={(id) => {
                setFilteredReceivedData(filteredReceivedData.filter(item => item.id !== id))
                setReceivedData(filteredReceivedData.filter(item => item.id !== id))
              }
            }
          />
        ))}
      </Grid>
    </>
  )
}

export default CardsGrid
