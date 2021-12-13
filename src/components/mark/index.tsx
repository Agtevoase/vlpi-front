import cn from 'classnames'
import styles from './Mark.module.scss'

interface Props {
  markValue: number
  minMark: number
}

const Mark: React.FC<Props> = ({ markValue, minMark }) => {
    let minMarkText

    if(markValue < minMark){
        minMarkText =  <span className={styles.minMark}>{`min. ${minMark}%`}</span>
    }

  return (
    <span className={styles.markBox}>
     {minMarkText}
      <span
        className={cn({
          [styles.mark]: true,
          [styles.badMark]: markValue < minMark,
          [styles.goodMark]: markValue >= minMark,
        })}
      >
        {`${markValue}%`}
      </span>
    </span>
  )
}

export default Mark
