import React, { useState, useEffect } from 'react'

import Search from '../../components/Search'
import Status from '../../components/Status'
import Product from '../../components/Product'

import { Grid } from './styles'

import api from '../../services/api'
import User from '../User'

const CardsGrid = ({
  selectable = true,
  entity,
  gridColumns = 'repeat(4, 1fr)',
  listOfSelectedItems = () => {}
}) => {
  const [selectedItems, setSelectedItems] = useState([])

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

  function handleSelectItem(id) {

    if(!selectable) return

    // findIndex retorna valor igual ou acima de 0 se o que estou buscando estiver dentro do array
    const alreadySelected = selectedItems.findIndex(item => item === id)

    if (alreadySelected >= 0) {
        // nessa variável estou filtrando a lista de itens selecionados e pegando apenas aquele item que for diferente do id que quero remover
        const filteredItems = selectedItems.filter(item => item !== id)

        setSelectedItems(filteredItems)
    } else {
        setSelectedItems([ ...selectedItems, id ])
    }

    listOfSelectedItems(
      entity === 'product'
      ? selectedItems
      : id
    )
}

  return (
    <>
      <Search
        placeholder={`Buscar ${entity === 'product' ? 'produto' : 'cliente'}s`}
        dataToFilter={receivedData}
        hasNotFound={setNotFound}
        onFiltered={setFilteredReceivedData}
      />

      <Status title={`Nenhum ${entity === 'product' ? 'produto' : 'cliente'} encontrado`} show={notFound} />

      <Status title="Carregando..." show={loading} />

      <Grid gridColumns={gridColumns}>
        {filteredReceivedData.map((item) => (
          entity === 'product' ?
            <Product
              key={item.id}
              id={item.id}
              image={item.images[0]}
              name={item.name}
              sale_price={item.sale_price}
              cost_price={item.cost_price}
              stock={item.stock}
              className={selectable && selectedItems.includes(item.id) ? 'selected' : ''}
              onClick={() => handleSelectItem(item.id)}
            />
          :
            <User
              key={item.id}
              id={item.id}
              name={item.name}
              street={item.address.street}
              number={item.address.number}
              neighborhood={item.address.neighborhood}
              zipcode={item.address.zipcode}
              city={item.address.city}
              state={item.address.state}
              phone={item.phone}
              onClick={() => handleSelectItem(item.id)}
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
