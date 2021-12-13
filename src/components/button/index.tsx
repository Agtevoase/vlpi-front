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
  onClick: () => void
}

const Button: React.FC<Props> = ({ text, type, ghost, onClick, submit }) => {
  return (
    <button
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
