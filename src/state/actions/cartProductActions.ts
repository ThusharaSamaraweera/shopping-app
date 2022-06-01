import { IProduct } from '../../types/shoppingAreaTypes';
import * as ACTIONS from '../actionConstants/cartProductsActions';
import { CartProductActionTypes } from '../actionTypes/cartProductActionTypes';

export function addCartProduct(newProduct: IProduct): CartProductActionTypes {
  return {
    type: ACTIONS.ADD_CART_PRODUCT,
    payload: newProduct
  }
}

export function removeCartProduct(id: string): CartProductActionTypes {
  return {
    type: ACTIONS.REMOVE_CART_PRODUCT,
    payload: id
  }
}

export function changeCartProduct(changeItem: IProduct): CartProductActionTypes {
  return {
    type: ACTIONS.CHANGE_CART_PRODUCT,
    payload: changeItem
  }
}

export function updateCartProduct(updateProduct: IProduct): CartProductActionTypes {
  return {
    type: ACTIONS.UPDATE_CART_PRODUCT,
    payload: updateProduct
  }
}

export function getProductFromSessionStorage(): CartProductActionTypes{
  return {
    type: ACTIONS.GET_PRODUCTS_FROM_SESSION_STORAGE
  }
}