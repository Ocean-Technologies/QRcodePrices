import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppProvider from './src/hooks'

import Routes from './src/routes'

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#28262e" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  )
}

export default App