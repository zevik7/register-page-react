import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Register from '../../containers/Register'
import { LoadingProvider } from '../../context/LoadingContext'

const RoutesApp = () => {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </LoadingProvider>
  )
}

export default RoutesApp
