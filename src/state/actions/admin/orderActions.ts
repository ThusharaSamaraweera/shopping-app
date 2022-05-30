import {OrderActionTypes} from '../../actionTypes/admin/orderActionTypes'
import * as actions from '../../actionConstants/admin/orderActions'
import { Order } from '../../../types/orderTypes'

export function setAllOrders(orders: Order[]) : OrderActionTypes{
  return {
    type: actions.SET_ALL_ORDERS,
    payload: orders
  }
}