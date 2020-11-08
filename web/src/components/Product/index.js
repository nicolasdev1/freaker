import React from 'react'

import { Wrapper, Container, Price } from './styles'

const Product = ({
  id,
  image,
  name,
  sale_price,
  cost_price,
  stock,
  className,
  onClick
}) => {
  return (
    <Wrapper className={className}>
      <Container
        key={id}
        onClick={onClick}
        className={className}
      >
        <img
          src={image}
          alt={name}
        />
        <span>{name}</span>

        <Price>
          <span>
            {sale_price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </Price>
      </Container>
    </Wrapper>
  )
}

export default Product
