import { ICartProducts } from "../../types/cartAreaTypes";
import { CartProductActionTypes } from "../actionTypes/cartProductActionTypes";
import * as ACTIONS from "../actionConstants/cartProductsActions";
import { updateSesstionStorageCart } from "../../utils/updateSesstionStorageCart";

const CartProductsInitialState: ICartProducts = {
  cartProducts: [],
};

export function CartProductReducter(
  state = CartProductsInitialState,
  action: CartProductActionTypes
): ICartProducts {
  let tempCart = [];

  switch (action.type) {
    case ACTIONS.ADD_CART_PRODUCT:
      tempCart = [...state.cartProducts, action.payload];
      updateSesstionStorageCart(tempCart)

      return {
        ...state,
        cartProducts: tempCart,
      };

    case ACTIONS.REMOVE_CART_PRODUCT:
      tempCart = state.cartProducts.filter(
        (cartProduct) => cartProduct.id !== action.payload
      );
      updateSesstionStorageCart(tempCart)

      return {
        ...state,
        cartProducts: tempCart,
      };

    case ACTIONS.UPDATE_CART_PRODUCT:
      tempCart = state.cartProducts.slice();
      const index = tempCart.findIndex(
        (product) => product.id === action.payload.id
      );
      tempCart[index] = action.payload;
      updateSesstionStorageCart(tempCart)

      return {
        ...state,
        cartProducts: tempCart,
      };

    case ACTIONS.CHANGE_CART_PRODUCT: {
      tempCart = state.cartProducts.slice();
      const indexOfUpdatedItem = tempCart.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      );
      tempCart[indexOfUpdatedItem] = action.payload;
      updateSesstionStorageCart(tempCart)

      return {
        ...state,
        cartProducts: tempCart,
      };
    }

    case ACTIONS.GET_PRODUCTS_FROM_SESSION_STORAGE: {
      // @ts-ignore
      tempCart = sessionStorage.getItem('cart')
      // @ts-ignore
      tempCart = JSON.parse(tempCart) ? JSON.parse(tempCart) : []
      
      return {
        ...state,
        // @ts-ignore
        cartProducts:  tempCart
      }
    }

    default: {
      return state;
    }
  }
}
