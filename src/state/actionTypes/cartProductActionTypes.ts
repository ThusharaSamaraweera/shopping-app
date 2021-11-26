import { Accordion } from 'react-bootstrap';
import { ICartProduct } from '../../types/cartAreaTypes';
import * as ACTIONS from '../actionConstants/cartProductsActions';

export interface AddCartProduct {
  type: typeof ACTIONS.ADD_CART_PRODUCT
  payload: ICartProduct
}

export interface RemoveCartProduct {
  type: typeof ACTIONS.REMOVE_CART_PRODUCT
  payload: number
}

export interface UpdateCartProduct {
  type: typeof ACTIONS.UPDATE_CART_PRODUCT
  payload: ICartProduct
}

export type CartProductActionTypes = AddCartProduct | RemoveCartProduct | UpdateCartProduct;