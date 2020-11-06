import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns'

import Header from '../Header'
import Card from '../Card'
import Modal from '../Modal'
import Button from '../Button'
import Form from '../Form'

import api from '../../services/api'

import { Container, CardWrapper } from './styles'

import useModal from '../../hooks/useModal'

const Overview = () => {
  const { modalVisible, setModalVisible, whichModal, setWhichModal } = useModal()
  
  const [userToDelete, setUserToDelete] = useState(Number)
  const [userToEdit, setUserToEdit] = useState({})
  
  const [users, setUsers] = useState([])

  function handleEditUser(data) {
    const { id } = userToEdit

    api.put(`/users/${id}`, data)

    setModalVisible(false)
  }

  function handleRegisterUser(data) {
    api.post('/users', data)

    setModalVisible(false)
  }

  function handleDeleteUser(id) {
    api.delete(`/users/${id}`).then(response => {
      setModalVisible(false)
    })
  }

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data)
    })
  }, [users])

  return (
    <>
      <Container>
        <Header title="Visão geral" />
        <CardWrapper>
          {users.map(user => (
            <>
              <Card
                key={user.id}
                name={user.name}
                salary={user.salary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                dateBirth={format(parseISO(user.date_birth), 'dd/MM/yyyy')}
                status={user.active}
              >
                <Button
                  onClick={() => {
                    setUserToEdit(user)
                    setModalVisible(true)
                    setWhichModal('edit')
                  }}
                  icon="/images/icons/pencil.svg"
                  title="Editar"
                  color="blue"
                  width="163px"
                  height="100%"
                />
                <Button
                  onClick={() => {
                    setUserToDelete(user.id)
                    setModalVisible(true)
                    setWhichModal('delete')
                  }}
                  icon="/images/icons/delete.svg"
                  title="Excluir"
                  color="red"
                  width="163px"
                  height="100%"
                />
              </Card>         
            </>
          ))}
        </CardWrapper>
      </Container>
      {
        modalVisible && whichModal === 'edit' ?
        <Modal
          title="Editar usuário"
        >
          <Form data={userToEdit} onSubmit={handleEditUser} />
        </Modal>
        : modalVisible && whichModal === 'delete' ?
        <Modal
          title="Deseja realmente excluir o usuário?"
          buttonLeft={
            <Button
              onClick={() => setModalVisible(false)}
              icon="/images/icons/close.svg"
              title="Cancelar"
              color="red"
              width="163px"
              height="100%"
            />
          }
          buttonRight={
            <Button
              onClick={() => handleDeleteUser(userToDelete)}
              icon="/images/icons/checked.svg"
              title="Confirmar"
              color="green"
              width="163px"
              height="100%"
            />
          }
        />
        : modalVisible && whichModal === 'register' &&
        <Modal
          title="Cadastrar usuário"
        >
          <Form onSubmit={handleRegisterUser} />
        </Modal>
      }
    </>
  )
}

export default Overview
