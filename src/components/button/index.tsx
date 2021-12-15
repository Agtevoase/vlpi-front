import cn from 'classnames'
import styles from './Button.module.scss'

export const enum ButtonType {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Secondary = 'secondary',
  Light = 'light',
  GhostLight = 'ghost-light',
}

interface Props {
  text?: string
  submit?: boolean
  type: ButtonType
  ghost?: boolean
  width?: number
  onClick: () => void
}

const Button: React.FC<Props> = ({ text, type, ghost, onClick, submit, width }) => {
  return (
    <button style={{'width': width}}
      type={submit ? 'submit' : 'button'}
      className={cn({
        [styles.ghost]: ghost,
        [styles[type]]: true,
        [styles.button]: true,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
