import { IProducts } from "../../types/shoppingAreaTypes";
import { productType } from "../actionTypes/productListActionTypes";
import * as ACTIONS from '../actionConstants/productListActions';
import { sampleProducts } from "../../components/constants/SampleProducts";

const productsInitialState = {
  products: sampleProducts
}

export function productReducer(state: IProducts = productsInitialState, action: productType): IProducts {
  switch(action.type) {
    case ACTIONS.ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    
    default: {
      return state;
    }
  }
}