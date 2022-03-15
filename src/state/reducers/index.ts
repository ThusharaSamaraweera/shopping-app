import {combineReducers} from "redux";
import { CartProductReducter } from "./cartProductReducer";
import { categoryReducer } from "./categoryReducter";
import { checkoutFormErrorReducer, checkoutFormReducer } from "./checkoutFormReducer";
import { productReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
  cartProducts: CartProductReducter,
  products: productReducer,
  category: categoryReducer,
  checkoutForm : checkoutFormReducer,
  checkoutFormError : checkoutFormErrorReducer
})

export type AppState = ReturnType<typeof rootReducer>