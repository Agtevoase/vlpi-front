import { fetchExercises } from 'services/api/exercises'
import { action } from 'store'
import { Thunk } from 'store/types'
import { ExerciseActionType } from './types'

export const getExercises = (): Thunk => async (dispatch) => {
  try {
    dispatch(action(ExerciseActionType.FETCH_EXERCISES_BEGIN))

    const { data } = await fetchExercises()

    dispatch(action(ExerciseActionType.FETCH_EXERCISES_SUCCESS, data))
  } catch (error) {
    dispatch(action(ExerciseActionType.FETCH_EXERCISES_ERROR, error))
  }
}

export default { getExercises }
