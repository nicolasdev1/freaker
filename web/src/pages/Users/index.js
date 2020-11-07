import React, { useState, useEffect } from 'react'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import Status from '../../components/Status'
import User from '../../components/User'
import Search from '../../components/Search'

import api from '../../services/api'

import {
  Title,
  Grid,
} from './styles'

const Users = () => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data)

      setFilteredUsers(response.data)

      setLoading(false)
    })
  }, [])

  return (
    <Container>
      <Header />
      <Profile />
      <NavBar active="Clientes" />

      <Title>Lista de clientes</Title>

      <Search
        placeholder="Buscar clientes"
        dataToFilter={users}
        onFiltered={setFilteredUsers}
        hasNotFound={setNotFound}
      />

      <Status title="Nenhum usuário encontrado" show={notFound} />

      <Status title="Carregando..." show={loading} />

      <Grid>
        {
          filteredUsers.map(user =>
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              street={user.address.street}
              number={user.address.number}
              neighborhood={user.address.neighborhood}
              zipcode={user.address.zipcode}
              city={user.address.city}
              state={user.address.state}
              phone={user.phone}
              onDelete={(id) =>
                setFilteredUsers(users.filter(user => user.id !== id))
              }
            />
          )
        }
      </Grid>
    </Container>
  )
}

export default Users
