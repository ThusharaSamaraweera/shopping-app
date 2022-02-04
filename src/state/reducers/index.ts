import {combineReducers} from "redux";
import { CartProductReducter } from "./cartProductReducer";
import { categoryReducer } from "./CategoryReducter";
import { productReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
  cartProducts: CartProductReducter,
  products: productReducer,
  category: categoryReducer
})

export type AppState = ReturnType<typeof rootReducer>