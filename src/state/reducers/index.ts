import {combineReducers} from "redux";
import { CartProductReducter } from "./cartProductReducer";
import { productReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
  cartProducts: CartProductReducter,
  products: productReducer
})

export type AppState = ReturnType<typeof rootReducer>