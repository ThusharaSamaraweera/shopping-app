import { ICartProducts } from "../../types/cartAreaTypes";
import { CartProductActionTypes } from "../actionTypes/cartProductActionTypes";
import * as ACTIONS from '../actionConstants/cartProductsActions';

const CartProductsInitialState: ICartProducts = {
  cartProducts: []
};

export function CartProductReducter(state = CartProductsInitialState, action: CartProductActionTypes): ICartProducts {
  switch(action.type){
    case ACTIONS.ADD_CART_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload]
      };
    
      case ACTIONS.REMOVE_CART_PRODUCT: 
        return {
          ...state,
          cartProducts: state.cartProducts.filter(
            cartProduct => cartProduct.id !== action.payload
          )
        };
      
      case ACTIONS.UPDATE_CART_PRODUCT:
        const cartProduct = state.cartProducts.slice();
        const index = cartProduct.findIndex(product => product.id === action.payload.id);
        cartProduct[index] = action.payload;
        return {
          ...state,
          cartProducts: cartProduct
        };

      case ACTIONS.CHANGE_CART_PRODUCT: {
        const cartProducts = state.cartProducts.slice();
        const indexOfUpdatedItem = cartProducts.findIndex(cartProduct => cartProduct.id === action.payload.id);
        cartProducts[indexOfUpdatedItem] = action.payload;
        return {
          ...state,
          cartProducts: cartProducts
        };
      }
      
      default: {
        return state;
      }
  }
}


