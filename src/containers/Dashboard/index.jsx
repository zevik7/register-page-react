import React, { useState, useEffect } from 'react'
import { Modal, Layout, Menu, Dropdown, Space } from 'antd'
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
import {
  Table,
  Logo,
  CopyrightFooter,
  Input,
  Radio,
  DatePicker,
} from '../../components'
import { getShoes, destroyShoes, storeShoe } from '../../api'
import AddingModal from './AddingModal'
import EditingModal from './EditingModal'

const { Header, Sider, Content } = Layout

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Descrition',
    dataIndex: 'desc',
    key: 'desc',
  },
]

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { user, logout } = useAuth()
  const [shoes, setShoes] = useState()
  const [isAddingModalVisible, setIsAddingModalVisible] = useState(false)
  const [isEditingModalVisible, setIsEditingModalVisible] = useState(false)
  const [editingModalData, setEditingModalData] = useState({})

  useEffect(() => {
    getShoes().then((rs) => {
      const result = rs.data.data
      setShoes(
        result.map((rs) => ({
          key: rs._id,
          name: rs.name,
          price: rs.price,
          desc: rs.desc,
        }))
      )
    })
  }, [])

  const onDelete = (selectedIds) => {
    destroyShoes({ ids: selectedIds })
    getShoes().then((rs) => {
      const result = rs.data.data
      setShoes(
        result.map((rs) => ({
          key: rs._id,
          name: rs.name,
          price: rs.price,
          desc: rs.desc,
        }))
      )
    })
  }

  const onClickTableRow = (data) => {
    setIsEditingModalVisible(true)
    setEditingModalData(data)
  }

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
    <Layout id="dashboard-layout">
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <Logo />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Shoes',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'User',
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
          {shoes && (
            <Table
              columns={columns}
              data={shoes}
              onDelete={onDelete}
              onClickRow={onClickTableRow}
              onAdd={() => setIsAddingModalVisible(!isAddingModalVisible)}
            />
          )}
        </Content>
      </Layout>
      <AddingModal
        isModalVisible={isAddingModalVisible}
        onCancel={() => setIsAddingModalVisible(false)}
      />
      <EditingModal
        isModalVisible={isEditingModalVisible}
        onCancel={() => setIsEditingModalVisible(false)}
        data={editingModalData}
        key={isEditingModalVisible}
      />
    </Layout>
  )
}

export default Dashboard
