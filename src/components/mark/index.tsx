
import cn from 'classnames'
import styles from './Mark.module.scss'



interface Props {
    markValue: number
    minMark: number
}

const Mark: React.FC<Props> = ({ markValue, minMark}) => {
    return <span
        className={cn({
            [styles.mark]: true,
            [styles.badMark]: markValue < minMark,
            [styles.goodMark]: markValue >= minMark,
        })}> {`${markValue}%`}

       </span>
}

export default Mark;
