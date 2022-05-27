import { IAuthUser } from "../../types/authTypes";
import * as actions from '../actionConstants/authActions'

interface SetAuthUser {
  type: typeof actions.SET_AUTH_USER,
  payload: IAuthUser
}

export type authActionTypes = SetAuthUser;