import cn from 'classnames'
import TaskItem from 'common/taskItem'
import DraftIcon from 'components/icons/draft'
import FailedIcon from 'components/icons/failed'

import HomeIcon from 'components/icons/home'
import PassedIcon from 'components/icons/passed'
import TaskIcon from 'components/icons/task'

import NavBarButton from 'components/navBarButton'

import styles from './TaskList.module.scss'

export const enum BlockType {
  Passed = 'passed',
  Failed = 'failed',
}

interface Task {
  number: number
  title: string
  id: number
  markValue?: number
  minMark?: number
  isDraft?: boolean
}

interface Props {
  tasks: Task[]
  onClick: (id: number) => void
}

const TaskList: React.FC<Props> = ({ tasks, onClick }) => {
  return (
    <div className={styles.taskList}>
      <div className={styles.taskListBox}>
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskItem
              isDraft={task.isDraft}
              markValue={task.markValue}
              minMark={task.minMark}
              number={task.number}
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
