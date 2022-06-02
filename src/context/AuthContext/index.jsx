import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

  const providerValues = {
    user,
    login: (user) => {
      setUser(user)
      setStorageUser(user)
      navigate('/setting')
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
