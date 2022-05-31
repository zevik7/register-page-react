import React, { useState } from 'react'
import { Form, Input } from 'antd'

function FormItem(props) {
  const {
    label,
    validateStatus,
    help,
    placeholder,
    autoComplete,
    name,
    value,
    onChange,
    suffix,
    type,
  } = props

  return (
    <Form.Item label={label} validateStatus={validateStatus} help={help}>
      <Input
        suffix={suffix}
        placeholder={placeholder}
        autoComplete={autoComplete || 'on'}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      ></Input>
    </Form.Item>
  )
}

export default FormItem
