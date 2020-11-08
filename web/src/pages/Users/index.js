import React, { useState, useEffect } from 'react'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import Status from '../../components/Status'
import User from '../../components/User'
import Search from '../../components/Search'
import Line from '../../components/Line'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

import api from '../../services/api'

import {
  Title,
  Grid,
  Form,
  Wrapper,
  Enter,
  ButtonContainer,
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

      <Line />

      <Form onSubmit={() => {}}>
          <h1>Criar um novo cliente</h1>
          <p>Forneça os dados necessários para cadastrar um cliente</p>

        <Wrapper>
          <div>
            <label htmlFor="name">Nome do cliente</label>
            <input
              type="text"
              // value={name}
              // onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="images">Endereço</label>
            <input
              type="text"
              // value={image}
              // onChange={(event) => setImage(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cost_price">Rua</label>
            <input
              type="number"
              // value={cost_price}
              // onChange={(event) => setCostPrice(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="sale_price">Preço de venda</label>
            <input
              type="number"
              // value={sale_price}
              // onChange={(event) => setSalePrice(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="stock">Estoque</label>
            <input
              type="number"
              // value={stock}
              // onChange={(event) => setStock(event.target.value)}
            />
          </div>
          </Wrapper>

          <ButtonContainer>
            <Button
              icon="/images/icons/enter.svg"
              title="Cadastrar cliente"
            />
          </ButtonContainer>

        </Form>
        <Footer />
    </Container>
  )
}

export default Users
