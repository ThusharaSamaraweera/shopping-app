import {combineReducers} from "redux";
import { CartProductReducter } from "./cartProductReducer";
import { categoryReducer } from "./categoryReducter";
import { checkoutBillingFormErrorReducer, checkoutBillingFormReducer } from "./checkoutFormReducer";
import {checkoutChangedShippingFormErrorReducer, checkoutChangedShippingFormReducer} from './checkoutChangedShippingFormReducer';
import { productReducer } from "./ProductReducer";
import { authUserReducer } from "./authReducer";

export const rootReducer = combineReducers({
  cartProducts: CartProductReducter,
  products: productReducer,
  category: categoryReducer,
  checkoutBillingForm : checkoutBillingFormReducer,
  checkoutBillingFormError : checkoutBillingFormErrorReducer,
  checkoutchangedShippingForm: checkoutChangedShippingFormReducer,
  checkoutchangedShippingFormError: checkoutChangedShippingFormErrorReducer,
  authUser: authUserReducer
})

export type AppState = ReturnType<typeof rootReducer>