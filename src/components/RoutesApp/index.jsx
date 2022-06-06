import React from 'react'
import { Route, Routes, HashRouter, BrowserRouter } from 'react-router-dom'

import Home from '../../containers/Home'
import Register from '../../containers/Register'
import Login from '../../containers/Login'
import Dashboard from '../../containers/Dashboard'
import NoMatch from '../../containers/NoMatch'
import Profile from '../../containers/Profile'
import Search from '../../containers/Search'
import { useAuth } from '../../context'

const RoutesApp = () => {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />

      {user.role === 'user' && <Route path="/profile" element={<Profile />} />}
      {user.role === 'admin' && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </>
      )}

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RoutesApp
