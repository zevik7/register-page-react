import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setTokenApi } from '../../api'

const AuthContext = React.createContext()

const getStorageUser = () => {
  const userString = localStorage.getItem('user')
  const user = JSON.parse(userString)
  return user
}

const setStorageUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

function AuthProvider(props) {
  const [user, setUser] = useState(getStorageUser() || {})
  const navigate = useNavigate()

  useEffect(() => {
    if (user.token) setTokenApi(user.token)
  }, [])

  const providerValues = {
    user,
    login: (user) => {
      setUser(user)
      setStorageUser(user)
      if (user.role === 'user') navigate('/dashboard')
      if (user.role === 'admin') navigate('/setting')
    },
    logout: () => {
      setUser({})
      navigate('/')
    },
  }

  return (
    <AuthContext.Provider value={providerValues}>
      {props.children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext
export { AuthProvider, useAuth }
