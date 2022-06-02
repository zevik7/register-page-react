import { useState } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div
        style={{
          padding: '40px',
          fontSize: '40px',
        }}
      >
        <h1>This is home page</h1>
        <Button type="primary" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button type="secondary" onClick={() => navigate('/register')}>
          Register
        </Button>
      </div>
    </>
  )
}

export default Home
