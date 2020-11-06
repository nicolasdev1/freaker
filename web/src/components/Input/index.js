import React from 'react'

import { Container } from './styles'

const Input = ({
  type,
  name,
  placeholder,
  description,
  autoComplete,
  required,
  value,
  onChange
}) => {
  return (
    <Container>
      <label for={name}>
        <span>{placeholder}<p>{description}</p></span>
      </label>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        defaultValue={value}
        onChange={onChange}
        spellcheck="false"
      />
    </Container>
  )
}

export default Input
