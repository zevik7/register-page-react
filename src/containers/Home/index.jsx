import { useState, useEffect } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HomeNavigation, ProductItem } from '../../components'
import { Row, Col } from 'antd'
import { getShoes } from '../../api'
import './style.less'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getShoes().then((rs) => {
      setProducts(rs.data.data)
    })
  }, [])
  return (
    <>
      <HomeNavigation />
      <div className="product-list">
        <h1
          style={{
            padding: '40px',
            textAlign: 'center',
          }}
        >
          Our products
        </h1>
        <Row justify="center" gutter={[16, 24]}>
          {products.map((product, i) => (
            <Col key={i} lg={6} sx={4}>
              <ProductItem
                image={process.env.REACT_APP_SERVER + product.images}
                name={product.name}
                desc={product.desc}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Home
