import React from 'react'
import { HashRouter } from 'react-router-dom'
import './App.less'
import { RoutesApp } from './components'

const App = () => {
  return (
    <HashRouter base="/">
      <RoutesApp />
    </HashRouter>
  )
}

export default App
