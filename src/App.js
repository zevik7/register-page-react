import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.less'
import RoutesApp from './components/RoutesApp'

const App = () => {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  )
}

export default App
