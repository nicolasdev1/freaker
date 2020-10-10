import React from 'react'

import {
  Container,
  Image,
  Title,
  Description
} from './styles'

const Slide = ({
  image,
  title,
  description
}) => {
  return (
    <Container>
      <Image source={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default Slide
