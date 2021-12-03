import * as ACTIONS from "../actionConstants/productListActions";
import { IProduct } from "../../types/shoppingAreaTypes";

export interface AddNewProduct {
  type: typeof ACTIONS.ADD_NEW_PRODUCT
  payload: IProduct
}

export interface SetInitProducts {
  type: typeof ACTIONS.SET_INIT_PRODUCTS
  payload: IProduct[]
}

export type productType = AddNewProduct | SetInitProducts;
