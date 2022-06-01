import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingContext = React.createContext()

function AuthContext(props) {
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
    <LoadingContext.Provider value={providerValues}>
      {props.children}
    </LoadingContext.Provider>
  )
}

function useLoading() {
  return useContext(LoadingContext)
}

export default LoadingContext
export { AuthContext, useLoading }
