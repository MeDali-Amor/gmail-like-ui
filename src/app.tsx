import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
// import {Text, View} from 'react-native';
import Navigations from './navs'
// import light from '@/themes/light'
import StatusBar from './components/status-bar'
import { useAtom } from 'jotai'
import { activeThemeAtom } from './states/theme'

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom)
  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
