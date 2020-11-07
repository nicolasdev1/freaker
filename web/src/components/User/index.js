import React, { useEffect } from 'react'

import api from '../../services/api'

import {
  Container,
  ButtonsContainer,
  InfoContainer
} from './styles'

const User = ({
  id,
  name,
  street,
  number,
  neighborhood,
  zipcode,
  city,
  state,
  phone,
  onDelete = () => {},
  onUpdate = () => {}
}) => {
  const handleUpdateUser = async (id) => {
    alert('Funcionalidade indisponível.')
  }

  const handleDeleteUser = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja remover o usuário?')

    if (!confirm) return

    await api.delete(`/users/${id}`)

    onDelete(
      id
    )

    alert('Usuário removido com sucesso.')
  }

  useEffect(() => {

  }, [])

  return (
    <Container>
      <InfoContainer>
        <span>
          <img src="/images/icons/user.svg" alt="Avatar do cliente" />
          {name}<label>#{id}</label>
        </span>

        <p>{street}, <span>{number}</span></p>
        <p>{neighborhood}</p>
        <p>{zipcode}</p>

        <p>{city} - <span>{state}</span></p>

        <p>{phone}</p>
      </InfoContainer>

      <ButtonsContainer>
        <button onClick={() => handleUpdateUser(id)}>
          Editar
        </button>

        <button onClick={() => handleDeleteUser(id)}>
          Excluir
        </button>
      </ButtonsContainer>
    </Container>
  )
}

export default User
