import * as actions from '../actionConstants/authActions'
import {authActionTypes} from '../actionTypes/authActionTypes'

const authUserInitialState = {
  authUser: {}
}

export function authUserReducer(state = authUserInitialState, action: authActionTypes){
  switch(action.type){
    case actions.SET_AUTH_USER: 
      return {
        ...state,
        authUser: action.payload
      }

    case actions.LOGOUT: 
      return {
        ...state,
        authUser: {}
      }
    default: 
      return state
  }
}