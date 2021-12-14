import { combineReducers } from 'redux'

import { AnyAction, AnyActionType } from './types'
import authReducer from './auth'
import exercisesReducer from './exercises'
import exerciseReducer from './exercise'

export const action = (type: AnyActionType, payload?: unknown): AnyAction =>
  ({
    type,
    payload,
  } as AnyAction)

const rootReducer = combineReducers({
  auth: authReducer,
  exercises: exercisesReducer,
  exercise: exerciseReducer,
})

export default rootReducer
