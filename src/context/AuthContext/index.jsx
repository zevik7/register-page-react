import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const providerValues = {
    user,
    login: (user) => {
      setUser(user)
      navigate('/dashboard')
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
