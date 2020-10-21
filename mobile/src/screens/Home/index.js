import React, { useCallback, useEffect, useState } from 'react'
import { Button, Text, Image, View, Alert } from 'react-native'

import api from '../../services/api'

import { Container } from './styles'

const Home = () => {
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const handleGetUsers = useCallback(async () => {
    const { data } = await api.get('products')

    setProducts(data)
  }, [])

  async function handleDeleteProduct(id) {
    try {
      await api.delete(`products/${id}`)

      setProducts(products.filter(product => product.id !== id))
    } catch (error) {
      Alert.alert(
        'Erro',
        'Ocorreu um erro ao remover o produto.'
      )
    }
  }

  useEffect(() => {
    handleGetUsers()

    setTimeout(() => setIsLoading(false), 1000)
  }, [handleGetUsers])

  if (isLoading) return <Container><Text>Carregando dados...</Text></Container>

  console.log(products)

  return (
    <Container>
      {products.map((product, index) => (
        <View key={index}>
          <Text>{product.name}</Text>
          <Image
            style={{ height: 200, width: 200 }}
            source={{
              uri:
                product.images[0]
            }}
          />

          <Button title="Remover" onPress={() => handleDeleteProduct(product.id)}/>
        </View>
      ))}
    </Container>
  )
}

export default Home
