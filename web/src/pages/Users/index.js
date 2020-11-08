import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import Line from '../../components/Line'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import CardsGrid from '../../components/CardsGrid'

import api from '../../services/api'

import {
  Title,
  Form,
  Wrapper,
  ButtonContainer,
} from './styles'

const Users = () => {
  const history = useHistory()

  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

const Users = () => {
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)

  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data)

      setFilteredUsers(response.data)

      setLoading(false)
    })
  }, [])

  async function handleCreateUser() {

    try {
      const data = {
        name,
        address: {
          street,
          number,
          neighborhood,
          zipcode,
          city,
          state
        },
        phone
      }

      await api.post('/users', data)
      alert('Cliente cadastrado com sucesso!')

    } catch (err) {
      console.log(err)
      alert('Erro no cadastro!')
    }

    history.go()
  }

  return (
    <Container>
      <Header />
      <Profile />
      <NavBar active="Clientes" />

      <Title>Lista de clientes</Title>

      <CardsGrid
        entity="user"
        gridColumns="repeat(3, 1fr)"
        selectable={false}
      />

      <Line />

      <Form>
          <h1>Criar um novo cliente</h1>
          <p>Forneça os dados necessários para cadastrar um cliente</p>

        <Wrapper>
          <div>
            <label htmlFor="name">Nome do cliente</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="grid">
            <div>
              <label htmlFor="street">Rua</label>
                <input
                  type="text"
                  value={street}
                  onChange={(event) => setStreet(event.target.value)}
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="number">Número</label>
                <input
                  type="text"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                />
            </div>
          </div>

          <div className="grid">
            <div>
              <label htmlFor="neighborhood">Bairro</label>
                <input
                  type="text"
                  value={neighborhood}
                  onChange={(event) => setNeighborhood(event.target.value)}
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="zipcode">Cep</label>
                <input
                  type="text"
                  value={zipcode}
                  onChange={(event) => setZipcode(event.target.value)}
                />
            </div>
          </div>

          <div className="grid">
            <div>
              <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="state">Estado</label>
                <input
                  type="text"
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                />
            </div>
          </div>

          <div>
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          </Wrapper>

          <ButtonContainer>
            <Button
              icon="/images/icons/enter.svg"
              title="Cadastrar cliente"
              onClick={handleCreateUser}
            />
          </ButtonContainer>

        </Form>
        <Footer />
    </Container>
    )
  }
}

export default Users
