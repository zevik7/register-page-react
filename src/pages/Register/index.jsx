import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import './style.scss'

const { Header, Footer, Content } = Layout

const Register = () => {
  const [form, setForm] = useState({
    name: { value: '', errorTxt: '' },
    birthday: { value: new Date().setFullYear(200), errorTxt: '' },
    gender: { value: 'Nam', errorTxt: '' },
    email: { value: '', errorTxt: '' },
    phone: { value: '', errorTxt: '' },
    address: { value: '', errorTxt: '' },
  })

  const onChange = () => {}

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>sdf</Header>
      <Content>
        <h1></h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="username">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Enter your username"
              autoComplete="on"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Enter your password"
              autoComplete="on"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Phu Nguyen - phu.nguyen@nfq.asia
      </Footer>
    </Layout>
  )
}

export default Register
