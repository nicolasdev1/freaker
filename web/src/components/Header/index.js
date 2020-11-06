import React from 'react'

import Button from '../Button'

import useModal from '../../hooks/useModal'

import { Container, Title } from './styles'

const Header = ({ title }) => {
  const { setModalVisible, setWhichModal } = useModal()

  return (
    <Container>
      <Title>{title}</Title>

      <Button
        title="Cadastrar"
        color="green"
        height="40px"
        width="135px"
        onClick={() => {
          setWhichModal('register')
          setModalVisible(true)
        }}
        icon="/images/icons/plus.svg"
      />
    </Container>
  )
}

export default Header
