import { useState } from 'react'
import { Card } from 'antd'

const { Meta } = Card

const ProductItem = (props) => {
  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      cover={
        <img
          alt={props.imgAlt}
          src={props.image}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'contain',
          }}
        />
      }
    >
      <Meta title={props.name} description={props.desc} />
    </Card>
  )
}

export default ProductItem
