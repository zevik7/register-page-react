import React, { useState } from 'react'
import { Button, Menu } from 'antd'
import NavLink from '../NavLink'
import './style.less'
import { useNavigate } from 'react-router-dom'

const items = [
  {
    label: <NavLink to="/">Home</NavLink>,
    key: 'home',
  },
  {
    label: <NavLink to="/dashboard">Dashboard</NavLink>,
    key: 'dashboard',
  },
  {
    label: <NavLink to="/profile">Profile</NavLink>,
    key: 'profile',
  },
]

const HomeNavigation = () => {
  const navigate = useNavigate()

  return (
    <div className="home-navigation">
      <Menu
        inlineCollapsed={false}
        mode="horizontal"
        items={items}
        className="menu"
      />
      <div className="btns">
        <Button type="primary" onClick={() => navigate('/register')}>
          Register
        </Button>
        <Button onClick={() => navigate('/login')}>Login</Button>
      </div>
    </div>
  )
}

export default HomeNavigation
