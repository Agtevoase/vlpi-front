import cn from 'classnames'
import icon from './task-icon.png'
import styles from './TaskIcon.module.scss'


interface Props {
  taskNumber?: number
  passed?: boolean
}

const TaskIcon: React.FC<Props> = ({ taskNumber , passed}) => {
  return (
    <span
      className={cn({
        [styles.failed]: passed === false,
        [styles.passed]: passed === true,
        [styles.iconSpan]: true,
      })}
    >
      <img src={icon} alt="task" />
      <div className={styles.number}> {taskNumber} </div>
    </span>
  )
}

export default TaskIcon
