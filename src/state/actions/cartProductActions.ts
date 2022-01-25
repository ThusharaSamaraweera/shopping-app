import { IProduct } from '../../types/shoppingAreaTypes';
import * as ACTIONS from '../actionConstants/cartProductsActions';
import { AddCartProduct, RemoveCartProduct, UpdateCartProduct } from '../actionTypes/cartProductActionTypes';

export function addCartProduct(newProduct: IProduct): AddCartProduct {
  return {
    type: ACTIONS.ADD_CART_PRODUCT,
    payload: newProduct
  }
}

export function removeCartProduct(id: number): RemoveCartProduct {
  return {
    type: ACTIONS.REMOVE_CART_PRODUCT,
    payload: id
  }
}

export function updateCartProduct(updateProduct: IProduct): UpdateCartProduct {
  return {
    type: ACTIONS.UPDATE_CART_PRODUCT,
    payload: updateProduct
  }
}