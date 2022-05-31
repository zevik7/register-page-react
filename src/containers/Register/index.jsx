import React, { useState } from 'react'
import moment from 'moment'
import { Form, Input, Button, Checkbox, DatePicker, Radio, Result } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import './style.less'
import {
  CopyrightFooter,
  FormItem,
  FormItemRadio,
  FormItemDate,
} from '../../components'
import { userValidator } from '../../utils/Validators'
import { useLoading } from '../../context/LoadingContext'
import Register from '../../api/Register'

const { Content } = Layout

const Register = () => {
  const { loading, show, hide } = useLoading()

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

    let errorTxt = userValidator(name, value)

    if (name === 'confirmPassword' && value !== form.password.value)
      errorTxt = 'Password and Confirm password are not same'

    setForm({ ...form, [name]: { value, errorTxt } })
  }

  const handleOnChangeDate = (date) => {
    let errorTxt = userValidator('birthday', date)
    setForm({ ...form, birthday: { value: date, errorTxt } })
  }

  const onSubmit = async () => {
    let formValidation = {}
    let isError = false

    // Validate all form's field
    for (let name in form) {
      let value = form[name].value
      let errorTxt = userValidator(name, value)

      if (name === 'confirmPassword' && value !== form.password.value)
        errorTxt = 'Password and Confirm password are not same'

      if (errorTxt) isError = true

      formValidation[name] = { value, errorTxt }
    }

    if (isError) {
      setForm(formValidation)
    } else {
      show()

      // showResult()
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
    <Layout style={{ minHeight: '100vh' }} className="register">
      <Content className="content">
        <Form
          {...formItemLayout}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          scrollToFirstError
          size="large"
        >
          <h1>Register</h1>
          <FormItem
            label="Name"
            validateStatus={form.name.errorTxt && 'error'}
            help={form.name.errorTxt}
            suffix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter your name"
            autoComplete="on"
            name="name"
            value={form.name.value}
            onChange={handleOnChange}
          />
          <FormItemRadio
            label="Gender"
            name="gender"
            value={form.gender.value}
            onChange={handleOnChange}
            items={['male', 'female']}
            itemLabels={['Male', 'Female']}
          />
          <FormItemDate
            label={'Birthday'}
            validateStatus={form.birthday.errorTxt && 'error'}
            help={form.birthday.errorTxt}
            name={'birthday'}
            value={form.birthday.value}
            onChange={handleOnChangeDate}
          />
          <FormItem
            label="Phone"
            validateStatus={form.phone.errorTxt && 'error'}
            help={form.phone.errorTxt}
            placeholder="Enter your phone"
            autoComplete="on"
            name="phone"
            value={form.phone.value}
            onChange={handleOnChange}
          />
          <FormItem
            label="Email"
            validateStatus={form.email.errorTxt && 'error'}
            help={form.email.errorTxt}
            placeholder="Enter your email"
            autoComplete="on"
            name="email"
            value={form.email.value}
            onChange={handleOnChange}
          />
          <FormItem
            suffix={<LockOutlined className="site-form-item-icon" />}
            label="Password"
            validateStatus={form.password.errorTxt && 'error'}
            help={form.password.errorTxt}
            placeholder="Enter new password"
            autoComplete="on"
            name="password"
            value={form.password.value}
            onChange={handleOnChange}
            type="password"
          />
          <FormItem
            suffix={<LockOutlined className="site-form-item-icon" />}
            label="Confirm Password"
            validateStatus={form.confirmPassword.errorTxt && 'error'}
            help={form.confirmPassword.errorTxt}
            placeholder="Retype the password"
            autoComplete="on"
            name="confirmPassword"
            value={form.confirmPassword.value}
            onChange={handleOnChange}
            type="password"
          />
          <Form.Item {...tailFormItemLayout} className="login-form-submit">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={onSubmit}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <CopyrightFooter />
    </Layout>
  )
}

export default Register
