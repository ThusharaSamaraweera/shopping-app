import { IProduct } from '../../types/shoppingAreaTypes';
import * as ACTIONS from '../actionConstants/cartProductsActions';

export interface AddCartProduct {
  type: typeof ACTIONS.ADD_CART_PRODUCT
  payload: IProduct
}

export interface RemoveCartProduct {
  type: typeof ACTIONS.REMOVE_CART_PRODUCT
  payload: string
}

export interface UpdateCartProduct {
  type: typeof ACTIONS.UPDATE_CART_PRODUCT
  payload: IProduct
}

export interface ChangeCartProduct {
  type: typeof ACTIONS.CHANGE_CART_PRODUCT
  payload: IProduct
}

export type CartProductActionTypes = AddCartProduct | RemoveCartProduct | UpdateCartProduct | ChangeCartProduct;