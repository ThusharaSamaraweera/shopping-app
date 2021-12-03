import * as ACTIONS from "../actionConstants/productListActions";
import { IProduct } from "../../types/shoppingAreaTypes";

export interface addNewProduct {
  type: typeof ACTIONS.ADD_NEW_PRODUCT
  payload: IProduct
}

export type productType = addNewProduct;
