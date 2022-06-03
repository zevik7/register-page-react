import { useState } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Setting = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        padding: '40px',
        fontSize: '40px',
      }}
    >
      <h1>This is setting page</h1>
      <Button
        type="primary"
        htmlType="submit"
        className="auth-form-button"
        onClick={() => navigate('/dashboard')}
      >
        Dashboard
      </Button>
      <Button
        type="secondary"
        htmlType="submit"
        className="auth-form-button"
        onClick={() => navigate('/')}
      >
        Home
      </Button>
    </div>
  )
}

export default Setting
