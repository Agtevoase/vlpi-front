/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import DraftIcon from 'components/icons/draft'
import FailedIcon from 'components/icons/failed'

import PassedIcon from 'components/icons/passed'
import TaskIcon from 'components/icons/task'
import { Routes } from 'constants/routes'
import { useNavigate } from 'react-router-dom'

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
  isPassed: boolean
  bestMark: number
  onClick: (id: number) => void
}

const TaskItem: React.FC<Props> = ({
  id,
  number,
  title,
  markValue,
  minMark,
  isDraft,
  isPassed,
  bestMark,
  onClick,
}) => {
  let passIcon
  let score

  const minMarkText = `${minMark ?? 100}%`
  const navigate = useNavigate();

  if(isPassed){
    passIcon = <PassedIcon />
  } else {
    passIcon = <FailedIcon />
  }

  if (isPassed !== null) {
    score = `Best: ${bestMark}%`
  } else {
    score = 'No Atempts'
  }

  return (
    <div role="button" 
    tabIndex={0}
    className={styles.taskItem}
    onClick={() => onClick(id)}
    onKeyDown={() => undefined}
    >

      <TaskIcon taskNumber={number} />
      <span className={styles.taskTitle}>{title}</span>
      <span className={styles.taskResult}>{score}</span>
{/* 
      <span className={styles.minMark}>
        <div>max.</div>
        <div>{bestMark}</div>
      </span> */}
      <span onClick={() => {
        
        navigate(Routes.exerciseResult)
      }} className={styles.passIcon}>{passIcon}</span>
    </div>
  )
}

export default TaskItem
