import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import rootReducer from 'store'

export type AnyActionType = unknown // To-Do: update action types later

export interface ReduxAction<ActionType = unknown, PayloadType = undefined>
  extends Action<ActionType> {
  payload: PayloadType
}

export type ReduxState = ReturnType<typeof rootReducer>

export type Thunk<ReturnType = unknown> = ThunkAction<
  Promise<ReturnType | undefined | void>,
  ReduxState,
  unknown,
  ReduxAction
>
