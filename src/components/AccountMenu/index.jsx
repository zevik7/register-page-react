import { Menu } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const AccountMenu = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.SubMenu
      key="SubMenu"
      title="Navigation Two - Submenu"
      icon={<SettingOutlined />}
    >
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        Log out
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
)

export default AccountMenu
