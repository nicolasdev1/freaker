import React from 'react'

import * as ROUTES from '../../constants/routes'

import Option from '../Option'

import useTheme from '../../hooks/useTheme'

import { Container, Top, Bottom } from './styles'

const SideBar = () => {
  const { theme, handleToggleTheme } = useTheme()

  return (
    <Container>
      <Top>
        <Option
          src={theme.title === 'dark' ? '/images/icons/overview-white.svg' : '/images/icons/overview.svg'}
          label="Visão geral"
          to={ROUTES.DASHBOARD}
        />
      </Top>
      <Bottom>
        <Option
          onClick={handleToggleTheme}
          src={theme.title === 'dark' ? '/images/icons/sun.svg' : '/images/icons/moon.svg'}
          label={theme.title === 'dark' ? 'Modo claro' : 'Modo escuro'}
        />
        <Option
          src={theme.title === 'dark' ? '/images/icons/logout-white.svg' : '/images/icons/logout.svg'}
          label="Sair"
          to={ROUTES.LOGIN}
        />
      </Bottom>
    </Container>
  )
}

export default SideBar
