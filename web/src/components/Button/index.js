import React from 'react'

import { Container } from './styles'

const Button = ({
  to,
  onClick,
  icon,
  title,
  color = '#fff',
  background = '#e04e5b',
  backgroundHover = '#ba3c47'
}) =>
  <Container
    to={to}
    onClick={onClick}
    color={color}
    background={background}
    backgroundHover={backgroundHover}
  >
    {icon && <span><img src={icon} alt="Entrar" /></span>}

    <strong>{title}</strong>
  </Container>

export default Button
