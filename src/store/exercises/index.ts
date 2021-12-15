import { Exercise } from 'types/models'
import { ExerciseAction, ExercisesActionType } from './types'

interface State {
  list: Exercise[] | null
  active: Exercise | null
  isLoading: boolean
  error: string | null
}

const initialState: State = {
  list: null,
  active: null,
  isLoading: false,
  error: null,
}

const reducer = (state = initialState, action: ExerciseAction): State => {
  switch (action.type) {
    case ExercisesActionType.FETCH_EXERCISES_BEGIN: {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }

    case ExercisesActionType.FETCH_EXERCISES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      }
    }

    case ExercisesActionType.FETCH_EXERCISES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      }
    }

    default:
      return state
  }
}

export default reducer
