import { IAuthUser } from "../../types/authTypes";
import * as actions from '../actionConstants/authActions'

interface SetAuthUser {
  type: typeof actions.SET_AUTH_USER,
  payload: IAuthUser
}

interface logout {
  type: typeof actions.LOGOUT,
}

export type authActionTypes = SetAuthUser | logout;