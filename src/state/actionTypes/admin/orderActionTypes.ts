import { Order } from "../../../types/orderTypes";
import * as actions from '../../actionConstants/admin/orderActions'

interface setAllOrders {
  type: typeof actions.SET_ALL_ORDERS
  payload: Order[]
}

export type OrderActionTypes = setAllOrders