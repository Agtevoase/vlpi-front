import { ReduxAction } from 'store/types'
import { UserWithToken } from 'types/models'

export enum AuthActionType {
  FETCH_REGISTER_BEGIN = '[auth] FETCH_REGISTER_BEGIN',
  FETCH_REGISTER_SUCCESS = '[auth] FETCH_REGISTER_SUCCESS',
  FETCH_REGISTER_ERROR = '[auth] FETCH_REGISTER_ERROR',
  FETCH_LOGIN_BEGIN = '[auth] FETCH_LOGIN_BEGIN',
  FETCH_LOGIN_SUCCESS = '[auth] FETCH_LOGIN_SUCCESS',
  FETCH_LOGIN_ERROR = '[auth] FETCH_LOGIN_ERROR',
  FETCH_LOGOUT_BEGIN = '[auth] FETCH_LOGOUT_BEGIN',
  FETCH_LOGOUT_SUCCESS = '[auth] FETCH_LOGOUT_SUCCESS',
  FETCH_LOGOUT_ERROR = '[auth] FETCH_LOGOUT_ERROR',
}

type FetchLoginBegin = ReduxAction<AuthActionType.FETCH_LOGIN_BEGIN>

type FetchLoginSuccess = ReduxAction<AuthActionType.FETCH_LOGIN_SUCCESS, UserWithToken>

type FetchLoginError = ReduxAction<AuthActionType.FETCH_LOGIN_ERROR, Error>

type FetchRegisterBegin = ReduxAction<AuthActionType.FETCH_REGISTER_BEGIN>

type FetchRegisterSuccess = ReduxAction<
  AuthActionType.FETCH_REGISTER_SUCCESS,
  UserWithToken
>

type FetchRegisterError = ReduxAction<
  AuthActionType.FETCH_REGISTER_ERROR,
  Error
>

type FetchLogoutBegin = ReduxAction<AuthActionType.FETCH_LOGOUT_BEGIN>

type FetchLogoutSuccess = ReduxAction<
  AuthActionType.FETCH_LOGOUT_SUCCESS,
  UserWithToken
>

type FetchLogoutError = ReduxAction<
  AuthActionType.FETCH_LOGOUT_ERROR,
  Error
>

export type AuthAction =
  | FetchLoginBegin
  | FetchLoginSuccess
  | FetchLoginError
  | FetchRegisterBegin
  | FetchRegisterSuccess
  | FetchRegisterError
  | FetchLogoutBegin
  | FetchLogoutSuccess
  | FetchLogoutError
