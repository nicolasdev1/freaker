import React from 'react'

import useModal from '../../hooks/useModal'

import Button from '../Button'

import {
  Wrapper,
  Container,
  Content,
  Bottom,
} from './styles'

const Modal = ({
  title,
  id = 'modal',
  buttonLeft,
  buttonRight,
  children,
}) => {
  const { setModalVisible } = useModal()

  function handleOutsideClick(event) {
    if (event.target.id === id) setModalVisible(false)
  }

  return (
    <Wrapper
      id={id}
      onClick={handleOutsideClick}
    >
      <Container>
        <Content>
          <h2>{title}</h2>

          {children}

          <Bottom>
            {buttonLeft}
            {buttonRight}
          </Bottom>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Modal
