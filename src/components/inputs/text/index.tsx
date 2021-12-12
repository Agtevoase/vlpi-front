import { InputHTMLAttributes } from 'react'

import styles from './TextInput.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined | false
}

const TextInput: React.FC<Props> = ({ error, ...props }) => {
  return (

      <div className={styles.label}>
        <input {...props} className={styles.input} />{' '}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    
  )
}

export default TextInput
