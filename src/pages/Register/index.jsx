import React, { useState } from 'react'
import moment from 'moment'
import { Form, Input, Button, Checkbox, DatePicker, Radio, Result } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import './style.less'

const { Header, Footer, Content } = Layout

const Register = () => {
  const [form, setForm] = useState({
    name: { value: '', errorTxt: '' },
    gender: { value: 'male', errorTxt: '' },
    birthday: { value: moment().set('year', 2000), errorTxt: '' },
    phone: { value: '', errorTxt: '' },
    email: { value: '', errorTxt: '' },
    password: { value: '', errorTxt: '' },
    confirmPassword: { value: '', errorTxt: '' },
  })

  const validate = (name, value) => {
    let errorTxt = ''

    if (!value) {
      errorTxt = 'This field is required'
    } else {
      switch (name) {
        case 'email':
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorTxt = 'Invalid email address'
          }
          break
        case 'phone':
          const regex =
            /^0(3[2-9]|5[689]|7(0|[6-9])|8([0-6]|8|9)|9([0-4]|[6-9]))[0-9]{7}$/
          if (!regex.test(value)) {
            errorTxt = 'Invalid phone number'
          }
          break
        case 'password':
          if (value.toString().length < 6) {
            errorTxt = 'Minimum 6 characters'
          }
          break
        case 'confirmPassword':
          if (value !== form.password.value) {
            errorTxt = 'Password and Confirm password are not same'
          }
          break
        default:
          break
      }
    }

    return errorTxt
  }

  const handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    let errorTxt = validate(name, value)

    setForm({ ...form, [name]: { value, errorTxt } })
  }

  const handleOnChangeDate = (date, dateString) => {
    let value = date
    let errorTxt = ''

    if (!value) errorTxt = 'This field is required'

    if (new Date(dateString) > new Date()) {
      errorTxt = 'Birthday must be lower than current date'
    }

    setForm({ ...form, birthday: { value: date, errorTxt } })
  }

  const onSubmit = () => {
    let formValidation = {}
    // Validate all form's field
    for (let name in form) {
      let value = form[name].value
      let errorTxt = validate(name, value)

      formValidation[name] = { value, errorTxt }
    }

    // Validate birthday
    if (formValidation.birthday.value > moment()) {
      formValidation.birthday.errorTxt =
        'Birthday must be lower than current date'
    }

    setForm(formValidation)
  }

  const onFinish = () => {
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
      sm: {
        offset: 6,
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
          onFinish={onFinish}
          scrollToFirstError
          size="large"
        >
          <h1>Register</h1>

          <Form.Item
            label="Name"
            validateStatus={form.name.errorTxt && 'error'}
            help={form.name.errorTxt}
          >
            <Input
              suffix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Enter your name"
              autoComplete="on"
              name="name"
              value={form.name.value}
              onChange={handleOnChange}
            />
          </Form.Item>
          <Form.Item label="Gender">
            <Radio.Group
              value={form.gender.value}
              name="gender"
              onChange={handleOnChange}
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Birthday"
            validateStatus={form.birthday.errorTxt && 'error'}
            help={form.birthday.errorTxt}
          >
            <DatePicker
              name="birthday"
              value={form.birthday.value}
              onChange={handleOnChangeDate}
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            validateStatus={form.phone.errorTxt && 'error'}
            help={form.phone.errorTxt}
          >
            <Input
              placeholder="Enter your phone"
              autoComplete="on"
              name="phone"
              value={form.phone.value}
              onChange={handleOnChange}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            validateStatus={form.email.errorTxt && 'error'}
            help={form.email.errorTxt}
          >
            <Input
              placeholder="Enter your Email"
              autoComplete="on"
              name="email"
              value={form.email.value}
              onChange={handleOnChange}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            validateStatus={form.password.errorTxt && 'error'}
            help={form.password.errorTxt}
          >
            <Input
              suffix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Enter your password"
              autoComplete="on"
              name="password"
              value={form.password.value}
              onChange={handleOnChange}
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            validateStatus={form.confirmPassword.errorTxt && 'error'}
            help={form.confirmPassword.errorTxt}
          >
            <Input
              suffix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Enter your Confirm password"
              autoComplete="on"
              name="confirmPassword"
              value={form.confirmPassword.value}
              onChange={handleOnChange}
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
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
      <Footer className="footer">Phu Nguyen - phu.nguyen@nfq.asia</Footer>
    </Layout>
  )
}

export default Register
