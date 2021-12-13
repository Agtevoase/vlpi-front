import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ExerciseContainer from 'containers/exercises'
import { getExercises } from 'store/exercise/actions'

const ExercisesPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getExercises())
  }, [])

  return <ExerciseContainer />
}

export default ExercisesPage
