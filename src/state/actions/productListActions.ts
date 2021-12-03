import { IProduct } from "../../types/shoppingAreaTypes";
import * as ACTIONS from "../actionConstants/productListActions";
import { addNewProduct } from "../actionTypes/productListActionTypes";

export function addNewProduct(newProduct: IProduct): addNewProduct{
  return {
    type: ACTIONS.ADD_NEW_PRODUCT,
    payload: newProduct
  }
}