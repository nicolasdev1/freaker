import React, { useState, useEffect } from 'react'
import { useHistory, Redirect, Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

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
  onUpdate = () => {},
  onClick = () => {}
}) => {
  // const history = useHistory()

  // const handleUpdateUser = async (id) => {
  //   alert('Funcionalidade indisponível.')
  // }

  // const handleNavigation = () => {
  //   history.push(ROUTES.EDIT_USER)
  // }

  const handleDeleteUser = async (id) => {
    const confirm = window.confirm('Tem certeza que deseja remover o usuário?')

    if (!confirm) return

    await api.delete(`/users/${id}`)

    onDelete(
      id
    )

    alert('Usuário removido com sucesso.')
  }

  return (
    <Container onClick={onClick}>
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
        <Link to={`/users/edit/${id}`}>
          Editar
        </Link>


        <button onClick={() => handleDeleteUser(id)}>
          Excluir
        </button>
      </ButtonsContainer>
    </Container>
  )
}

export default User
