import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Title } from './styles'

const ComingSoon = () => {
  const history = useHistory()

  return (
    <Container>
      <div>
        <button onClick={() => history.goBack()}>
          <img src="/images/icons/left-arrow.svg" alt="Voltar" />
        </button>

        <Title>Em breve...</Title>
      </div>
    </Container>
  )
}

export default ComingSoon
