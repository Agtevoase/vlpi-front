import { InputHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './TextInput.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined | false
  label?: string
  className?: string
}

const TextInput: React.FC<Props> = ({ error, label, className, ...props }) => {
  return (
    <div className={cn(styles.inputWrapper, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <input {...props} className={cn(styles.input)} />{' '}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export default TextInput
