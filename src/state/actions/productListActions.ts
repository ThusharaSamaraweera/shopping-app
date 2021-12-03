import { IProduct } from "../../types/shoppingAreaTypes";
import * as ACTIONS from "../actionConstants/productListActions";
import { AddNewProduct, SetInitProducts } from "../actionTypes/productListActionTypes";

export function addNewProduct(newProduct: IProduct): AddNewProduct{
  return {
    type: ACTIONS.ADD_NEW_PRODUCT,
    payload: newProduct
  }
}

export function setInitProducts(products: IProduct[]): SetInitProducts {
  return {
    type: ACTIONS.SET_INIT_PRODUCTS,
    payload: products
  }
}