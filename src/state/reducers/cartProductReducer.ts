import { ICartProducts } from "../../types/cartAreaTypes";
import { CartProductActionTypes } from "../actionTypes/cartProductActionTypes";
import * as ACTIONS from '../actionConstants/cartProductsActions';

const CartProductsInitialState: ICartProducts = {
  cartProducts: [
    {id: 1, title: 'Carrot', category: {id: 2, title: 'Food'}, quantity: 5, regular_price: 2008.99, discount_price: 1999.99, image: 'https://s3.amazonaws.com/cdn1.shub/pharmacy/dettol.jpg'},
    {id: 1, title: 'Carrot', category: {id: 2, title: 'Food'}, quantity: 5, regular_price: 2008.99, discount_price: 1999.99, image: 'https://s3.amazonaws.com/cdn1.shub/pharmacy/dettol.jpg'},
  ]
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
      
      default: {
        return state;
      }
  }
}


