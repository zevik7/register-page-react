import React from 'react'
import { Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const UploadImg = (props) => {
  const { onChange, fileList, type } = props

  const config = {
    name: 'images',
    action: process.env.REACT_APP_SERVER_API + `/${type}`,
    listType: 'picture',
    headers: {
      authorization: 'authorization-text',
    },
    onChange: onChange,
  }

  return (
    <>
      <Upload {...config}>
        <Button icon={<UploadOutlined />}>Add images</Button>
      </Upload>
    </>
  )
}

export default UploadImg
