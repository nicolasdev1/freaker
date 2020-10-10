import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Onboarding from '../screens/Onboarding'
import Home from '../screens/Home'

const { Navigator, Screen } = createStackNavigator()

const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Onboarding" component={Onboarding} />
                <Screen name="Home" component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack
