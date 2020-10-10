import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { AppLoading } from 'expo'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import AppStack from './src/routes/AppStack'

const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
      
        <StatusBar style="auto" />
      </>
    )
  }
}

export default App
