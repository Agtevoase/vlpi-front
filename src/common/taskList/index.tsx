import cn from 'classnames'
import DraftIcon from 'components/icons/draft'
import FailedIcon from 'components/icons/failed'

import HomeIcon from 'components/icons/home'
import PassedIcon from 'components/icons/passed'
import TaskIcon from 'components/icons/task'

import NavBarButton from 'components/navBarButton'

import styles from './TaskItem.module.scss'

export const enum BlockType {
  Passed = 'passed',
  Failed = 'failed',
}

interface Props {
  number: number
  title: string
  id: number
  markValue?: number
  minMark?: number
  isDraft?: boolean
  onClick: (id: number) => void
}

const TaskItem: React.FC<Props> = ({
  id,
  number,
  title,
  markValue,
  minMark,
  isDraft,
  onClick,
}) => {
  let passIcon
  let score

  const minMarkText = `${minMark ?? 100}%`

  if (markValue) {
    if (markValue < (minMark ?? 100)) {
      passIcon = <FailedIcon />
    } else {
      passIcon = <PassedIcon />
    }

    score = `Best: ${markValue}%`
  } else if (isDraft) {
    passIcon = <DraftIcon />
    score = 'Draft'
  } else {
    score = 'No Atempts'
  }

  return (
    <div className={styles.taskItem}>
      <TaskIcon taskNumber={number} />
      <span className={styles.taskTitle}>{title}</span>
      <span className={styles.taskResult}>{score}</span>

      <span className={styles.minMark}>
        <div>min.</div>
        <div>{minMarkText}</div>
      </span>
      <span className={styles.passIcon}>{passIcon}</span>
    </div>
  )
}

export default TaskItem
