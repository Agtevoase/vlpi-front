import { fetchLogin, fetchLogout, fetchRegister } from 'services/api/auth'
import { action } from 'store'
import { Thunk } from 'store/types'

import { AuthActionType } from './types'

export const register =
  (name: string, email: string, password: string): Thunk =>
  async (dispatch) => {
    try {
      dispatch(action(AuthActionType.FETCH_REGISTER_BEGIN))

      const data = await fetchRegister({ name, email, password })

      dispatch(action(AuthActionType.FETCH_REGISTER_SUCCESS, data))
    } catch (error) {
      dispatch(action(AuthActionType.FETCH_REGISTER_ERROR, error))
    }
  }

export const login =
  (email: string, password: string): Thunk =>
  async (dispatch) => {
    try {
      dispatch(action(AuthActionType.FETCH_LOGIN_BEGIN))

      const data = await fetchLogin({ email, password })

      dispatch(action(AuthActionType.FETCH_LOGIN_SUCCESS, data))
    } catch (error) {
      dispatch(action(AuthActionType.FETCH_LOGIN_ERROR, error))
    }
  }

export const logout = (): Thunk => async (dispatch) => {
  try {
    dispatch(action(AuthActionType.FETCH_LOGOUT_BEGIN))

    const data = await fetchLogout()

    dispatch(action(AuthActionType.FETCH_LOGOUT_SUCCESS, data))
  } catch (error) {
    dispatch(action(AuthActionType.FETCH_LOGOUT_ERROR, error))
  }
}
