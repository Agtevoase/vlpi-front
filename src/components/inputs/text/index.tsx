
import { InputHTMLAttributes } from 'react';

import styles from './TextInput.module.scss'

type Props = InputHTMLAttributes<HTMLInputElement> 

const TextInput: React.FC<Props> = (props) => {
    return <input {...props} className={styles.input} />
}

export default TextInput
