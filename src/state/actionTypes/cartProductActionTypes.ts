import { IProduct } from '../../types/shoppingAreaTypes';
import * as ACTIONS from '../actionConstants/cartProductsActions';

interface AddCartProduct {
  type: typeof ACTIONS.ADD_CART_PRODUCT
  payload: IProduct
}

interface RemoveCartProduct {
  type: typeof ACTIONS.REMOVE_CART_PRODUCT
  payload: string
}

interface UpdateCartProduct {
  type: typeof ACTIONS.UPDATE_CART_PRODUCT
  payload: IProduct
}

interface ChangeCartProduct {
  type: typeof ACTIONS.CHANGE_CART_PRODUCT
  payload: IProduct
}

export type CartProductActionTypes = AddCartProduct | RemoveCartProduct | UpdateCartProduct | ChangeCartProduct;