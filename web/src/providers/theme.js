import React from 'react'
import { ThemeProvider as ThemeStyledComponents } from 'styled-components'

import usePersistedState from '../hooks/usePersistedState'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

import ThemeContext from '../contexts/ThemeContext'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', light)
  
  const handleToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <ThemeStyledComponents theme={theme}>
        {children}
      </ThemeStyledComponents>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
