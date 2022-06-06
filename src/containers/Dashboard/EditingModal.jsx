import React, { useState, useEffect } from 'react'
import { Modal, Form, Button, Carousel, Image } from 'antd'
import './style.less'
import { Input, Radio, DatePicker } from '../../components'
import { getShoes, destroyShoes, storeShoe } from '../../api'
import UploadImg from '../../components/UploadImg'

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
  const { onCancel, isModalVisible } = props

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

  const onChangeImg = () => {
    console.log('here')
  }

  const onOk = () => {
    if (!form.name.value || !form.price.value || !form.desc.value) return

    storeShoe({
      name: form.name.value,
      price: form.price.value,
      desc: form.desc.value,
    }).then((rs) => {
      if (rs.status === 200)
        Modal.success({
          content: 'Success',
        })
    })
  }

  return (
    <Modal
      title="Add new shoes"
      visible={isModalVisible}
      onOk={onOk}
      onCancel={onCancel}
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
          <UploadImg
            fileList={form.images.value}
            onChange={onChangeImg}
            type="shoe"
          />
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
