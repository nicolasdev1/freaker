import React from 'react'

import EllipsisMenu from './EllipsisMenu'

import { Container, Line, Main } from './styles'

const Card = ({ children }) => {
  return (
    <Container>
      <Line />

      <Main>
        {children}

        <EllipsisMenu />
      </Main>
    </Container>
  )
}

export default Card
