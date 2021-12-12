    
import { InputHTMLAttributes } from "react";

import styles from './TextInput.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    t?: unknown
}

const TextInput: React.FC<Props> = (props) => {
    return <input {...props} className={styles.input} />
}

export default TextInput
