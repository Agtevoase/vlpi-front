import { combineReducers } from 'redux'

import { AnyAction, AnyActionType } from './types'
import authReducer from './auth'

export const action = (type: AnyActionType, payload?: unknown): AnyAction =>
  ({
    type,
    payload,
  } as AnyAction)

const rootReducer = combineReducers({
  auth: authReducer
})

export default rootReducer
