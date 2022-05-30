import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Register from '../pages/Register'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  )
}

export default RoutesApp
