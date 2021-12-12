import icon from './task-icon.png'
import styles from './TaskIcon.module.scss'

interface Props {
  taskNumber?: number
}

const TaskIcon: React.FC<Props> = ({ taskNumber }) => {
  return (
    <span className={styles.iconSpan}>
      <img src={icon} alt="task" />
      <div className={styles.number}> {taskNumber} </div>
    </span>
  )
}

export default TaskIcon
