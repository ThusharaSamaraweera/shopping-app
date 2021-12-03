import { IProducts } from "../../types/shoppingAreaTypes";
import { productType } from "../actionTypes/productListActionTypes";
import * as ACTIONS from '../actionConstants/productListActions';

const productsInitialState = {
  products: []
}

export function productReducer(state: IProducts = productsInitialState, action: productType): IProducts {
  switch(action.type) {
    case ACTIONS.SET_INIT_PRODUCTS: 
      return {
        ...state,
        products: action.payload
      }
      
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