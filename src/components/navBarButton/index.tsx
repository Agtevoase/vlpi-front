import cn from 'classnames'
import { useState } from 'react'
import styles from './NavBarButton.module.scss'

export const enum ButtonType {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Secondary = 'secondary',
  Light = 'light',
  GhostLight = 'ghost-light',
}

interface Props {
  shadowColor?: string
  onClick: () => void
}

const NavBarButton: React.FC<Props> = ({ shadowColor, onClick, ...props }) => {
  const [hover, setHover] = useState(false)

  const hoverStyle = {filter: hover ? `drop-shadow( 0px 0px 6px ${shadowColor ?? 'white'})` : ''};

  return (
    <span
    
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}

      tabIndex={0}
      role="button"
      className={styles.button}
      onClick={onClick}
      onKeyDown={() => onClick()}
      style={{ ...hoverStyle}}
    >
      {props.children}
    </span>
  )
}

export default NavBarButton
