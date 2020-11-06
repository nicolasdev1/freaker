import React from 'react'

import {
  Container,
  CardHeader,
  Title,
  CardBody,
  Salary,
  DateBirth,
  Status,
  CardBottom
} from './styles'

const Card = ({ children, name, salary, dateBirth, status }) => {
  return (
    <Container>
      <CardHeader>
        <Title>{name}</Title>
      </CardHeader>
      <CardBody>
        <Salary>Salário: <span>{salary}</span></Salary>
        <DateBirth>Data de nascimento: <span>{dateBirth}</span></DateBirth>
        <Status>Status: <span>{status ? 'Ativo' : 'Inativo'}</span></Status>
      </CardBody>
      <CardBottom>
        {children}
      </CardBottom>
    </Container>
  )
}

export default Card
