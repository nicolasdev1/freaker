import React, { useState, useEffect, use } from 'react'

import api from '../../../services/api'

import Container from '../../../components/Container'
import Header from '../../../components/Header'
import Profile from '../../../components/Profile'
import NavBar from '../../../components/NavBar'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'

import { Form, Wrapper, ButtonContainer } from './styles'

const EditUser = (props) => {
  const { id } = props.match.params
  const [user, setUser] = useState({})

  console.log(id)

  const handleLoadUser = async () => {
    const response = api.get(`/users/${id}`)

    console.log(response.data)
  }

  useEffect(() => {
    handleLoadUser()
  }, [])

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
              value={user.name}
              // onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="grid">
            <div>
              <label htmlFor="street">Rua</label>
                <input
                  type="text"
                  // value={street}
                  // onChange={(event) => setStreet(event.target.value)}
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="number">Número</label>
                <input
                  type="text"
                  // value={number}
                  // onChange={(event) => setNumber(event.target.value)}
                />
            </div>
          </div>

          <div className="grid">
            <div>
              <label htmlFor="neighborhood">Bairro</label>
                <input
                  type="text"
                  // value={neighborhood}
                  // onChange={(event) => setNeighborhood(event.target.value)}
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="zipcode">Cep</label>
                <input
                  type="text"
                  // value={zipcode}
                  // onChange={(event) => setZipcode(event.target.value)}
                />
            </div>
          </div>

          <div className="grid">
            <div>
              <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  // value={city}
                  // onChange={(event) => setCity(event.target.value)}
                />
            </div>

            <div></div>

            <div>
            <label htmlFor="state">Estado</label>
                <input
                  type="text"
                  // value={state}
                  // onChange={(event) => setState(event.target.value)}
                />
            </div>
          </div>

          <div>
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              // value={phone}
              // onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          </Wrapper>

          <ButtonContainer>
            <Button
              icon="/images/icons/enter.svg"
              title="Atualizar dados"
              onClick={() => {}}
            />
          </ButtonContainer>

        </Form>
      <Footer />
    </Container>
  )
}

export default EditUser
