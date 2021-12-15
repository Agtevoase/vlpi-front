import cn from 'classnames'
import TaskItem from 'common/taskItem'
import { Exercise } from 'types/models'

import styles from './TaskList.module.scss'

export const enum BlockType {
  Passed = 'passed',
  Failed = 'failed',
}

interface Props {
  tasks: Exercise[]
  onClick: (id: number) => void
}

const TaskList: React.FC<Props> = ({ tasks, onClick }) => {
  return (
    <div className={styles.taskList}>
      <div className={styles.taskListBox}>
        {tasks.map((task, index) => (
          <div key={task.id}>
            <TaskItem
              // isDraft={task.isDraft}
              // markValue={task.markValue}
              minMark={task.minMark}
              isPassed={task.statistics.hasPassed}
              bestMark={task.statistics.bestMark}
              number={index + 1}
              title={task.title}
              id={task.id}
              onClick={() => onClick(task.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
