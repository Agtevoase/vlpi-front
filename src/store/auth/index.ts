import { User } from 'types/models'
import { AuthAction, AuthActionType } from './types'

interface State {
  token: string | null
  user: User | null
  isLoading: boolean
  error: string | null
}

const initialState: State = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
}

const reducer = (state = initialState, action: AuthAction): State => {
  switch (action.type) {
    case AuthActionType.FETCH_REGISTER_BEGIN:
    case AuthActionType.FETCH_LOGIN_BEGIN:
    case AuthActionType.FETCH_LOGOUT_BEGIN: {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }

    case AuthActionType.FETCH_REGISTER_ERROR:
    case AuthActionType.FETCH_LOGIN_ERROR:
    case AuthActionType.FETCH_LOGOUT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      }
    }

    case AuthActionType.FETCH_REGISTER_SUCCESS:
    case AuthActionType.FETCH_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: {
          ...state.user,
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
        },
      }
    }

    case AuthActionType.FETCH_LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token: null,
        user: null,
      }
    }

    default:
      return state
  }
}

export default reducer
