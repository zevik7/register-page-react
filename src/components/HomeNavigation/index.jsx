import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './style.less'

const { Header, Content, Footer } = Layout

const HomeNavigation = () => (
  <div className="home-navigation">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
    <div className="auth-btn-list">
      <Button className="auth-btn-item" type="primary">
        <Link to="/login">Login</Link>
      </Button>
      <Button className="auth-btn-item">
        <Link to="/register">Register</Link>
      </Button>
    </div>
  </div>
)

export default HomeNavigation
