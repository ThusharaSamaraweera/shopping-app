import {combineReducers} from "redux";
import { CartProductReducter } from "./cartProductReducer";
import { categoryReducer } from "./categoryReducter";
import { checkoutBillingFormErrorReducer, checkoutBillingFormReducer } from "./checkoutFormReducer";
import {checkoutChangedShippingFormErrorReducer, checkoutChangedShippingFormReducer} from './checkoutChangedShippingFormReducer';
import { productReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
  cartProducts: CartProductReducter,
  products: productReducer,
  category: categoryReducer,
  checkoutForm : checkoutBillingFormReducer,
  checkoutFormError : checkoutBillingFormErrorReducer,
  checkoutchangedShippingForm: checkoutChangedShippingFormReducer,
  checkoutchangedShippingFormError: checkoutChangedShippingFormErrorReducer
})

export type AppState = ReturnType<typeof rootReducer>