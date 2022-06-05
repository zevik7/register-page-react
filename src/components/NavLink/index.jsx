import { NavLink } from 'react-router-dom'
import './style.less'

const NavLinkCustom = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? 'active' : undefined)}
    >
      {props.children}
    </NavLink>
  )
}

export default NavLinkCustom
