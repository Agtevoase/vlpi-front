import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Loader from 'common/loader'
import TaskList from 'common/taskList'

import { ReduxState } from 'store/types'
import { Routes } from 'constants/routes'

import styles from './styles.module.scss'

const ExerciseContainer: React.FC = () => {
  const { isLoading, list } = useSelector((state: ReduxState) => state.exercise)

  const navigate = useNavigate()

  if (isLoading || !list) return <Loader />

  return (
    <div className={styles.container}>
      <TaskList
        tasks={list}
        onClick={(id) => navigate(Routes.exercise.replace('[id]', `${id}`))}
      />
    </div>
  )
}

export default ExerciseContainer
