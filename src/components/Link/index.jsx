import { Link, useResolvedPath, useMatch } from 'react-router-dom'

const LinkItem = (props) => {
  let resolved = useResolvedPath(props.to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link to={props.to}>
      <ListItemButton selected={Boolean(match)}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItemButton>
    </Link>
  )
}

export default LinkItem
