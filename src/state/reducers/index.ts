import {combineReducers} from "redux";
import { CartProductReducter } from "./cartProductReducer";

export const rootReducer = combineReducers( {
  cartProducts: CartProductReducter
})

export type AppState = ReturnType<typeof rootReducer>