import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './App.less'
import { RoutesApp } from './components'
import { LoadingProvider } from './context/LoadingContext'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <RoutesApp />
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
