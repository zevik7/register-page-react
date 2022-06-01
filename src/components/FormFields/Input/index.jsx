import React, { useState } from 'react'
import { Form, Input } from 'antd'

function InputField(props) {
  const {
    label,
    validateStatus,
    help,
    placeholder,
    autoComplete,
    name,
    value,
    onChange,
    prefix,
    type,
    disabled,
  } = props

  return (
    <Form.Item label={label} validateStatus={validateStatus} help={help}>
      <Input
        disabled={disabled}
        prefix={prefix}
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

export default InputField
