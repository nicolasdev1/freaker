import React from 'react'

import { Container } from './styles'

const Option = ({
  to,
  onClick,
  src,
  alt,
  label,
  activeTab
}) => {

  return (
    <Container
      to={to}
      activeTab={activeTab}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        width={24}
        height={24}
      />
      <span>{label}</span>
    </Container>
  )
}

export default Option
