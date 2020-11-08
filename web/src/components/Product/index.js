import React from 'react'

import { Wrapper, Container, Price } from './styles'

const Product = ({
  data,
  selected,
  onClick
}) => {
  return (
    <Wrapper selected={selected}>
      <Container
        onClick={onClick}
        selected={selected}
      >
        <img
          src={data.images[0]}
          alt={data.name}
        />
        <span>{data.name}</span>

        <Price>
          <span>
            {data.sale_price.toLocaleString('pt-BR', {
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
