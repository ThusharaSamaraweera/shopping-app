import { IOrderReduxStore } from '../../../types/orderTypes'
import * as actions from '../../actionConstants/admin/orderActions'
import { OrderActionTypes } from '../../actionTypes/admin/orderActionTypes'

const ordersInitialState: IOrderReduxStore = {
  orders: []
}

export function ordersReducer( state = ordersInitialState, action: OrderActionTypes){
  switch(action.type){
    case actions.SET_ALL_ORDERS: 
      return {
        ...state,
        orders: action.payload
      }
    default: 
      return state
  }
}