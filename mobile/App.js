import { StatusBar } from 'expo-status-bar'
import React from 'react'

import AppStack from './src/routes/AppStack'

const App = () => {
  return (
    <>
      <AppStack />
      
      <StatusBar style="auto" />
    </>
  )
}

export default App
