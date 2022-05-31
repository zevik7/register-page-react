import React, { useContext, useEffect, useState } from 'react'
import api from '../../api/user'

const LoadingContext = React.createContext()

function LoadingProvider(props) {
  const [loading, setLoading] = useState(false)

  const providerValues = {
    loading,
    show: () => setLoading(true),
    hide: () => setLoading(false),
  }

  return (
    <LoadingContext.Provider value={providerValues}>
      {props.children}
    </LoadingContext.Provider>
  )
}

function userLoading() {
  return useContext(LoadingContext)
}

export default LoadingContext
export { LoadingProvider, userLoading }
