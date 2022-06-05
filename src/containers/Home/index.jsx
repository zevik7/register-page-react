import { useState } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import HomeNavigation from '../../components/HomeNavigation'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <HomeNavigation />
    </>
  )
}

export default Home
