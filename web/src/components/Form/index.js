import { format, parseISO } from 'date-fns'
import React, { useState } from 'react'
import useModal from '../../hooks/useModal'
import Button from '../Button'
import Input from '../Input'

import { Container, ButtonContainer } from './styles'

const Form = ({ data, onSubmit }) => {
  const [name, setName] = useState(data && data.name)
  const [salary, setSalary] = useState(data && data.salary)
  const [date_birth, setDateBirth] = useState(data && handleFormatFNS(data.date_birth))
  const [active, setActive] = useState(data ? data.active : 'Ativo')

  const { whichModal, setModalVisible } = useModal()

  function handleFormatFNS(date) {
    return format(parseISO(date), 'dd/MM/yyyy')
  }

  function handleFormatDate(date) {
    const day  = date.split('/')[0]
    const month  = date.split('/')[1]
    const year  = date.split('/')[2]
  
    return year + '/' + ('0'+month).slice(-2) + '/' + ('0'+day).slice(-2)
    // utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }

  function handleOnSubmit(event) {
    event.preventDefault()

    onSubmit({
      name,
      salary,
      date_birth: handleFormatDate(date_birth),
      active: active === 'Ativo' ? true : false
    })
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <Input
          type="text"
          name="name"
          value={data && data.name}
          autoComplete="off"
          placeholder="Nome"
          onChange={event => setName(event.target.value)}
        />
        <Input
          type="text"
          name="salary"
          value={data && data.salary}
          autoComplete="off"
          placeholder="Salário"
          description="(em reais)"
          onChange={event => setSalary(event.target.value)}
        />

        <Input
          type="text"
          name="date"
          value={data && format(parseISO(data.date_birth), 'dd/MM/yyyy')}
          autoComplete="off"
          placeholder="Data de nascimento"
          onChange={event => setDateBirth(event.target.value)}
        />

        {
          data &&
            <Input
              type="text"
              name="status"
              value={data.active ? 'Ativo' : 'Inativo'}
              autoComplete="off"
              placeholder="Status"
              onChange={event => setActive(event.target.value)}
            />
        }

        <ButtonContainer>
          <Button
            onClick={() => setModalVisible(false)}
            icon="/images/icons/close.svg"
            title="Cancelar"
            color="red"
            width="163px"
            height="100%"
          />
          <Button
            type="submit"
            icon="/images/icons/checked.svg"
            title={whichModal === 'register' ? 'Confirmar' : 'Enviar'}
            color="green"
            width="163px"
            height="100%"
          />
        </ButtonContainer>
      </form>
    </Container>
  )
}

export default Form
