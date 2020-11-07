import React from 'react'

import { Container } from './styles'

const Status = ({ title, show }) =>
  <Container show={show}>
    <h3>{title}</h3>
  </Container>

export default Status
