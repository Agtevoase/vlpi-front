import cn from 'classnames'
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
  return (
    <span
      tabIndex={0}
      role="button"
      className={styles.button}
      onClick={onClick}
      onKeyDown={() => onClick()}
      style={{ filter: `drop-shadow( 0px 0px 6px ${shadowColor ?? 'white'})` }}
    >
      {props.children}
    </span>
  )
}

export default NavBarButton