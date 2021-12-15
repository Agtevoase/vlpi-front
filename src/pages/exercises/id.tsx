import ExerciseContainer from 'containers/exercise'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getExercise } from 'store/exercise/actions'

const ExercisePage: React.FC = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if(id)
      dispatch(getExercise(id))
  }, [])
  
  return (
    <div>
      <ExerciseContainer />
    </div>
  )
}

export default ExercisePage
