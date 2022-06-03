import React, { useState } from 'react'
import { Layout, Menu, Dropdown, Space } from 'antd'
import {
  DownOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'
import './style.less'
import { useAuth } from '../../context'
import { Table } from '../../components'

const { Header, Sider, Content } = Layout

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { user, logout } = useAuth()

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a rel="noopener noreferrer" href="#" onClick={() => logout()}>
              Log out
            </a>
          ),
        },
      ]}
    />
  )

  return (
    <Layout id="components-layout-demo-custom-trigger">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <Dropdown
            overlay={menu}
            className="account-menu"
            placement="bottomRight"
          >
            <Space>
              Chao, {user.name}
              <DownOutlined />
            </Space>
          </Dropdown>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Table />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
