import React from 'react'

import ThemeProvider from '../providers/theme'
import ModalProvider from '../providers/modal'

const Contexts = ({ children }) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  )
}

export default Contexts
