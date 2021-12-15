import { fetchExercise, postExercise } from 'services/api/exercises'
import { action } from 'store'
import { Thunk } from 'store/types'
import { SubmitExercise } from 'types/models'
import { ExerciseActionType } from './types'

export const getExercise = (id: string): Thunk => async (dispatch) => {
  try {
    dispatch(action(ExerciseActionType.FETCH_EXERCISE_BEGIN))

    const { data } = await fetchExercise(id)

    dispatch(action(ExerciseActionType.FETCH_EXERCISE_SUCCESS, data))
  } catch (error) {
    dispatch(action(ExerciseActionType.FETCH_EXERCISE_ERROR, error))
  }
}

export const submitExercise = (d: SubmitExercise): Thunk => async (dispatch) => {
  try {
    dispatch(action(ExerciseActionType.FETCH_EXERCISE_BEGIN))

    const { data } = await postExercise(d)

    dispatch(action(ExerciseActionType.FETCH_EXERCISE_RESULT, data))
  } catch (error) {
    dispatch(action(ExerciseActionType.FETCH_EXERCISE_ERROR, error))
  }
}

export default { getExercise }
