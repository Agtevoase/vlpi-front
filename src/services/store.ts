import { Store } from 'redux'
import { AnyAction, ReduxState } from 'store/types'

let store: Store<ReduxState, AnyAction> | undefined

export const setStore = (newStore: Store) => {
  store = newStore
}

export const getState = () => store?.getState()

export const dispatch = (action: AnyAction) => store?.dispatch(action)
