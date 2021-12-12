import { combineReducers } from 'redux'
import { AnyAction, AnyActionType } from './types'

export const action = (type: AnyActionType, payload?: unknown): AnyAction =>
  ({
    type,
    payload,
  } as AnyAction)

const rootReducer = combineReducers({})

export default rootReducer
