import {ActionType} from './action-types'

interface SignIn {
  type: ActionType.SIGN_IN,
  payload: string
}

interface Signout {
  type: ActionType.SIGN_OUT
}

interface CreateStream {
  type: ActionType.CREATE_STREAM
  payload: any
}

interface SignIn {
  type: ActionType.SIGN_IN,
  payload: string
}

interface Signout {
  type: ActionType.SIGN_OUT
}

interface CreateStream {
  type: ActionType.CREATE_STREAM
  payload: any
}

export type Action = SignIn | Signout | CreateStream;