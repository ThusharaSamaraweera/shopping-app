import {OrderActionTypes} from '../../actionTypes/admin/orderActionTypes'
import * as actions from '../../actionConstants/admin/orderActions'
import { IOrder } from '../../../types/orderTypes'

export function setAllOrders(orders: IOrder[]) : OrderActionTypes{
  return {
    type: actions.SET_ALL_ORDERS,
    payload: orders
  }
}