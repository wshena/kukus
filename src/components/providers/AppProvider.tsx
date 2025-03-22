'use client'
import React from 'react'
import { Provider as ChakraProvider } from "@/components/ui/provider"
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/lib/redux/store'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default AppProvider