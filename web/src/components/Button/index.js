import React from 'react'

import { Container } from './styles'

const Button = ({
  type,
  title,
  color,
  width,
  height,
  icon,
  onClick
}) => {
  return (
    <Container
      color={color}
      onClick={onClick}
      width={width}
      height={height}
    >
      <img src={icon} width={16} height={16} />
      <button type={type}>{title}</button>
    </Container>
  )
}

export default Button
