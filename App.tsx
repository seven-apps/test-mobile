import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ToastProvider } from 'react-native-styled-toast'
import { ThemeProvider } from 'styled-components'

import theme from './constants/theme'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    )
  }
}
