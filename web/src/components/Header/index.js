import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import { Container, Logo, UserInfo, Avatar } from './styles'

const Header = () => {
  return (
    <Container>
      <Link to={ROUTES.DEFAULT}>
      <Logo src="/images/icons/freaker-food.svg" alt="Freaker Food" />
      </Link>

      <UserInfo>
        <Avatar />

        <span>Nícolas Santos Carvalho</span>
      </UserInfo>
    </Container>
  )
}

export default Header
