import React, { useState, useEffect, useReducer } from 'react'
import { useHistory} from 'react-router-dom'

import * as ROUTES from '../../../constants/routes'

import api from '../../../services/api'

import Container from '../../../components/Container'
import Header from '../../../components/Header'
import Profile from '../../../components/Profile'
import NavBar from '../../../components/NavBar'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'

import { Form, Wrapper, ButtonContainer } from './styles'

const EditUser = (props) => {
  const history = useHistory()

  const { id } = props.match.params
  const [user, setUser] = useState({
    address: {},
  })

  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [phone, setPhone] = useState('')

  async function handleGetUsers() {
    const response = await api.get(`/users/${id}`)
    setUser(response.data)
  }

  useEffect(() => {
    handleGetUsers()
  }, [])

  async function handleUpdateUser() {
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

      await api.put(`/users/${id}`, data)

      alert('Alteração realizada com sucesso!')
      history.push(ROUTES.USERS)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header />
      <Profile />
      <NavBar active="Clientes" />

      <Form>
          <h1>Editar cliente</h1>
          <p>Forneça os dados necessários para cadastrar um cliente</p>

        <Wrapper>
          <div>
            <label htmlFor="name">Nome do cliente</label>
            <input
              type="text"
              defaultValue={user.name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="grid">
            <div>
              <label htmlFor="street">Rua</label>
                <input
                  type="text"
                  defaultValue={user.address.street}
                  onChange={(event) => setStreet(event.target.value)}
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="number">Número</label>
                <input
                  type="text"
                  defaultValue={user.address.number}
                  onChange={(event) => setNumber(event.target.value)}
                />
            </div>
          </div>

          <div className="grid">
            <div>
              <label htmlFor="neighborhood">Bairro</label>
                <input
                  type="text"
                  defaultValue={user.address.neighborhood}
                  onChange={(event) => setNeighborhood(event.target.value)}
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="zipcode">CEP</label>
                <input
                  type="text"
                  defaultValue={user.address.zipcode}
                  onChange={(event) => setZipcode(event.target.value)}
                />
            </div>
          </div>

          <div className="grid">
            <div>
              <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  defaultValue={user.address.city}
                  onChange={(event) => setCity(event.target.value)}
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="state">Estado</label>
                <input
                  type="text"
                  defaultValue={user.address.state}
                  onChange={(event) => setState(event.target.value)}
                />
            </div>
          </div>

          <div>
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              defaultValue={user.phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          </Wrapper>

          <ButtonContainer>
            <Button
              icon="/images/icons/enter.svg"
              title="Atualizar dados"
              onClick={handleUpdateUser}
            />
          </ButtonContainer>

        </Form>
      <Footer />
    </Container>
  )
}

export default EditUser
