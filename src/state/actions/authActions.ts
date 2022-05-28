import { IAuthUser } from "../../types/authTypes";
import * as actions from "../actionConstants/authActions";
import { authActionTypes } from "../actionTypes/authActionTypes";

export function setAuthUser(newAuthUser: IAuthUser): authActionTypes {
  sessionStorage.setItem("authUser", JSON.stringify(newAuthUser));

  return {
    type: actions.SET_AUTH_USER,
    payload: newAuthUser,
  };
}

export function logout(): authActionTypes {
  sessionStorage.removeItem("authUser");

  return {
    type: actions.LOGOUT,
  };
}
