import React, { useState } from 'react'

import { Container, Line } from './styles'

const Item = ({ title, active, to }) => {
  const [line, setLine] = useState(active)

  return (
    <Container
      to={to}
      onMouseEnter={() => setLine(true)}
      onMouseLeave={() => setLine(active && true)}
    >
      <strong>{title}</strong>

      <Line active={line} />
    </Container>
  )
}

export default Item
