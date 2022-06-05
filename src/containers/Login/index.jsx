import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Alert } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { CopyrightFooter, Input, Radio, DatePicker } from '../../components'
import { userValidate } from '../../utils/Validators'
import { useLoading, useAuth } from '../../context'
import { login as loginApi } from '../../api'

const { Content } = Layout

const Loggin = () => {
  const { isLoading, setLoading, unSetLoading } = useLoading()
  const { login, user } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (user.token && user.role == 'user') {
      navigate('/profile')
    }
    if (user.token && user.role == 'admin') {
      navigate('/dashboard')
    }
  }, [])

  const [form, setForm] = useState({
    email: { value: '', errorTxt: '' },
    password: { value: '', errorTxt: '' },
  })

  const [invalidAccount, setInvalidAccount] = useState(false)

  const handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    let errorTxt = userValidate(name, value)

    setForm({ ...form, [name]: { value, errorTxt } })
  }

  const onSubmit = async () => {
    let formValidation = {}
    let isError = false

    // Validate all form's field
    for (let name in form) {
      let value = form[name].value
      let errorTxt = userValidate(name, value)

      if (errorTxt) isError = true

      formValidation[name] = { value, errorTxt }
    }

    if (isError) {
      setForm(formValidation)
    } else {
      setLoading()
      loginApi({
        email: form.email.value,
        password: form.password.value,
      })
        .then((rs) => {
          unSetLoading()
          login(rs.data)
          console.log(rs)
        })
        .catch((err) => {
          setInvalidAccount(true)
          unSetLoading()
        })
    }
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  }

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
      },
    },
  }

  return (
    <Layout style={{ minHeight: '100vh' }} className="auth">
      <Content className="content">
        <Form
          {...formItemLayout}
          name="normal_login"
          className="auth-form"
          initialValues={{
            remember: true,
          }}
          scrollToFirstError
          size="large"
        >
          <h1>Welcome</h1>
          <Input
            label="Email"
            validateStatus={form.email.errorTxt && 'error'}
            help={form.email.errorTxt}
            placeholder="Enter your email"
            autoComplete="on"
            name="email"
            value={form.email.value}
            onChange={handleOnChange}
            disabled={isLoading}
          />
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            label="Password"
            validateStatus={form.password.errorTxt && 'error'}
            help={form.password.errorTxt}
            placeholder="Enter your password"
            autoComplete="on"
            name="password"
            value={form.password.value}
            onChange={handleOnChange}
            type="password"
            disabled={isLoading}
          />
          <Form.Item {...tailFormItemLayout} className="auth-form-submit">
            <Button
              type="primary"
              htmlType="submit"
              className="auth-form-button"
              onClick={onSubmit}
              loading={isLoading}
            >
              Log In
            </Button>
          </Form.Item>
          {invalidAccount && (
            <Alert message="Email or password is incorrect" type="error" />
          )}
          <p className="switch-page">
            Or you have an account?{' '}
            <span onClick={() => navigate('/register')}>Register</span>
          </p>
        </Form>
      </Content>
      <CopyrightFooter />
    </Layout>
  )
}

export default Loggin
