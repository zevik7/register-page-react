import React, { useState } from 'react'
import moment from 'moment'
import { Form, Button, Modal } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import './style.less'
import { CopyrightFooter, Input, Radio, DatePicker } from '../../components'
import { userValidate } from '../../utils/Validators'
import { useLoading } from '../../context'
import { register } from '../../api'
import { useNavigate } from 'react-router-dom'

const { Content } = Layout

const Register = () => {
  const { isLoading, setLoading, unSetLoading } = useLoading()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: { value: '', errorTxt: '' },
    gender: { value: 'male', errorTxt: '' },
    birthday: { value: moment().set('year', 2000), errorTxt: '' },
    phone: { value: '', errorTxt: '' },
    email: { value: '', errorTxt: '' },
    password: { value: '', errorTxt: '' },
    confirmPassword: { value: '', errorTxt: '' },
  })

  const handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    let errorTxt = userValidate(name, value)

    if (name === 'confirmPassword' && value !== form.password.value)
      errorTxt = 'Password and Confirm password are not same'

    setForm({ ...form, [name]: { value, errorTxt } })
  }

  const handleOnChangeDate = (date) => {
    let errorTxt = userValidate('birthday', date)
    setForm({ ...form, birthday: { value: date, errorTxt } })
  }

  const onSubmit = async () => {
    let formValidation = {}
    let isError = false

    // Validate all form's field
    for (let name in form) {
      let value = form[name].value
      let errorTxt = userValidate(name, value)

      if (name === 'confirmPassword' && value !== form.password.value)
        errorTxt = 'Password and Confirm password are not same'

      if (errorTxt) isError = true

      formValidation[name] = { value, errorTxt }
    }

    if (isError) {
      setForm(formValidation)
    } else {
      setLoading()
      register().then((rs) => {
        console.log(rs)
        showResult() // This func for logging result
        unSetLoading()
        Modal.success({
          content: 'Your account has been successfully created.',
        })
      })
    }
  }

  const showResult = () => {
    let result = {}
    for (let name in form) {
      let value = form[name].value
      if (name === 'birthday') value = value.toISOString()
      result[name] = value
    }

    console.log(result)
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
          <h1>Register your account</h1>
          <Input
            label="Name"
            validateStatus={form.name.errorTxt && 'error'}
            help={form.name.errorTxt}
            placeholder="Enter your name"
            autoComplete="on"
            name="name"
            value={form.name.value}
            onChange={handleOnChange}
            disabled={isLoading}
          />
          <Radio
            label="Gender"
            name="gender"
            value={form.gender.value}
            onChange={handleOnChange}
            items={['male', 'female']}
            itemLabels={['Male', 'Female']}
            disabled={isLoading}
          />
          <DatePicker
            label={'Birthday'}
            validateStatus={form.birthday.errorTxt && 'error'}
            help={form.birthday.errorTxt}
            name={'birthday'}
            value={form.birthday.value}
            onChange={handleOnChangeDate}
            disabled={isLoading}
          />
          <Input
            label="Phone"
            validateStatus={form.phone.errorTxt && 'error'}
            help={form.phone.errorTxt}
            placeholder="Enter your phone"
            autoComplete="on"
            name="phone"
            value={form.phone.value}
            onChange={handleOnChange}
            disabled={isLoading}
          />
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
            placeholder="Enter new password"
            autoComplete="on"
            name="password"
            value={form.password.value}
            onChange={handleOnChange}
            type="password"
            disabled={isLoading}
          />
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            label="Confirm Password"
            validateStatus={form.confirmPassword.errorTxt && 'error'}
            help={form.confirmPassword.errorTxt}
            placeholder="Retype the password"
            autoComplete="on"
            name="confirmPassword"
            value={form.confirmPassword.value}
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
              Register
            </Button>
          </Form.Item>
          <p className="switch-page">
            Or you have an account?{' '}
            <span onClick={() => navigate('/login')}>Sign In</span>
          </p>
        </Form>
      </Content>
      <CopyrightFooter />
    </Layout>
  )
}

export default Register
