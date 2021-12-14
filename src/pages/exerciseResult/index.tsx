import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ExerciseContainer from 'containers/exercises'
import { getExercises } from 'store/exercises/actions'
import ExerciseResultContainer from 'containers/exerciseResult'

const ExerciseResult: React.FC = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getExercises())
  // }, [])

  return <ExerciseResultContainer />
}

export default ExerciseResult