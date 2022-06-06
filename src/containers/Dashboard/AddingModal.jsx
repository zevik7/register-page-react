import React, { useState, useEffect } from 'react'
import { Modal, Form, Button, Carousel, Image } from 'antd'
import './style.less'
import { Input, Radio, DatePicker } from '../../components'
import { getShoes, destroyShoes } from '../../api'

const imgStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
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

const AddingModal = (props) => {
  const { handleOk, handleCancel, isModalVisible } = props

  const [form, setForm] = useState({
    name: {
      value: '',
      errTxt: '',
    },
    price: {
      value: 0,
      errTxt: '',
    },
    desc: {
      value: '',
      errTxt: '',
    },
    images: {
      value: [],
      errTxt: '',
    },
  })

  const handleInput = (e) => {
    const name = e.target.name
    let value = e.target.value
    let errTxt = ''

    // Validate
    if (!value) errTxt = 'This field is required'

    setForm({
      ...form,
      [name]: {
        value,
        errTxt,
      },
    })
  }

  return (
    <Modal
      title="Add new shoes"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="ADD"
    >
      <Form
        {...formItemLayout}
        initialValues={{
          remember: true,
        }}
        scrollToFirstError
        size="large"
      >
        <Input
          label="Name"
          placeholder="Enter shoes's name"
          autoComplete="on"
          name="name"
          validateStatus={form.name.errTxt && 'error'}
          help={form.name.errTxt}
          value={form.name.value}
          onChange={handleInput}
        />
        <Input
          label="Price"
          placeholder="Enter shoe's price"
          autoComplete="on"
          name="price"
          type="number"
          validateStatus={form.price.errTxt && 'error'}
          help={form.price.errTxt}
          value={form.price.value}
          onChange={handleInput}
        />
        <Input
          label="Description"
          placeholder="Enter shoes's decription"
          autoComplete="on"
          name="desc"
          validateStatus={form.desc.errTxt && 'error'}
          help={form.desc.errTxt}
          value={form.desc.value}
          onChange={handleInput}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <label htmlFor="contained-button-file">
            <input
              name="images"
              accept="image/*"
              id="contained-button-file"
              type="file"
              style={{
                display: 'none',
              }}
              multiple
              // onChange={handleChangeAvatar}
            />
            <button type="outlined">Add images</button>
          </label>
        </div>
        <Carousel>
          {form.images.value.map((image, index) => (
            <Image
              width={'100%'}
              height="200px"
              src={process.env.REACT_APP_SERVER + image}
            />
          ))}
        </Carousel>
      </Form>
    </Modal>
  )
}

export default AddingModal
