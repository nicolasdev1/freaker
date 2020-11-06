import React from 'react'

import Routes from './routes'

import Contexts from './contexts'

import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <Contexts>
      <GlobalStyles />
      <Routes />
    </Contexts>
  )
}

export default App
