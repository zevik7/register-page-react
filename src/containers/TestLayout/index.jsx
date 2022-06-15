import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import {
  Breadcrumb,
  Layout,
  Menu,
  Typography,
  Card,
  Row,
  Col,
  Button,
} from 'antd'
import { useState } from 'react'
import './style.less'

const { Meta } = Card
const { Header, Content, Footer, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const { Title } = Typography

const items = [
  getItem('Home', '1', <DesktopOutlined />),
  getItem('Dashboard', '2', <PieChartOutlined />),
  getItem('Blog', '3', <FileOutlined />),
  getItem('About Us', '4'),
]

const TestLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <div className="logo" />
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
          title="Home"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              paddingLeft: '20px',
            }}
          >
            <Title
              level={2}
              style={{
                marginBottom: 0,
              }}
            >
              Home
            </Title>
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '9px 0',
            }}
          >
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="content site-layout-background">
            <Row gutter={[18, 18]}>
              <Col lg={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="data:image/jpeg;base64,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"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                  <div className="btn-box">
                    <Button type="primary">See more</Button>
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="data:image/jpeg;base64,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"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                  <div className="btn-box">
                    <Button type="primary">See more</Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default TestLayout
