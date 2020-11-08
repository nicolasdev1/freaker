import React from 'react'

import api from '../../services/api'
import Product from '../Product'

import {
  Container,
  ButtonsContainer,
  InfoContainer
} from './styles'

const Order = ({
  data,
  onDelete = () => {},
  onUpdate = () => {},
  onClick = () => {}
}) => {
  const handleUpdateOrder = async (id) => {
    alert('Funcionalidade indisponível.')
  }

  const handleDeleteOrder = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja remover o pedido?')

    if (!confirm) return

    await api.delete(`/orders/${id}`)

    onDelete(
      id
    )

    alert('Pedido removido com sucesso.')
  }

  return (
    <Container onClick={onClick}>
      <InfoContainer>
        <span>Pedido <strong>#{data.id}</strong></span>

        <div>
          <span>
            Nome do cliente:
          </span>
          {data.users.name}
        </div>

        <div>
          <span>
            Telefone do cliente:
          </span>
          {data.users.phone}
        </div>

        <div>
          <span>
            Status:
          </span>
          {data.status}
        </div>

        <span>
          Produtos:
        </span>

        <div>
          {data.products.map(product => (
            <span>{product.name}</span>
          ))}
        </div>
      </InfoContainer>

      <ButtonsContainer>
        <button onClick={() => handleUpdateOrder(data.id)}>
          Editar
        </button>

        <button onClick={() => handleDeleteOrder(data.id)}>
          Excluir
        </button>
      </ButtonsContainer>
    </Container>
  )
}

export default Order
