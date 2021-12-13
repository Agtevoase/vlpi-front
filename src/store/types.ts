import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import rootReducer from 'store'
import { AuthAction, AuthActionType } from './auth/types'
import { ExerciseAction, ExerciseActionType } from './exercise/types'

// To-Do: update action types later
export type AnyAction = AuthAction | ExerciseAction

export type AnyActionType = AuthActionType | ExerciseActionType

export interface ReduxActionWithPayload<ActionType, PayloadType>
  extends Action<ActionType> {
  payload: PayloadType
}

export type ReduxAction<
  ActionType = AnyActionType,
  PayloadType = undefined,
> = PayloadType extends undefined
  ? Action<ActionType>
  : ReduxActionWithPayload<ActionType, PayloadType>

export type ReduxState = ReturnType<typeof rootReducer> & {
  _persist?: {
    version: number
    rehydrated: boolean
  }
}

export type Thunk<ReturnType = unknown> = ThunkAction<
  Promise<ReturnType | undefined | void>,
  ReduxState,
  unknown,
  ReduxAction
>
