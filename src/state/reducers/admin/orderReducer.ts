import * as actions from '../../actionConstants/admin/orderActions'
import { OrderActionTypes } from '../../actionTypes/admin/orderActionTypes'

const OrdersInitialState = {
  orders: []
}

export function OrdersReducer( state = OrdersInitialState, action: OrderActionTypes){
  switch(action.type){
    case actions.SET_ALL_ORDERS: 
    console.log(action)
      return {
        ...state,
        orders: action.payload
      }
    default: 
      return state
  }
}