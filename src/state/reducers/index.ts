import {combineReducers} from "redux";
import { CartProductReducer } from "./cartProductReducer";
import { categoryReducer } from "./categoryReducter";
import { checkoutBillingFormErrorReducer, checkoutBillingFormReducer } from "./checkoutFormReducer";
import {checkoutChangedShippingFormErrorReducer, checkoutChangedShippingFormReducer} from './checkoutChangedShippingFormReducer';
import { productReducer } from "./ProductReducer";
import { authUserReducer } from "./authReducer";
import { OrdersReducer } from "./admin/orderReducer";

export const rootReducer = combineReducers({
  cartProducts: CartProductReducer,
  products: productReducer,
  category: categoryReducer,
  checkoutBillingForm : checkoutBillingFormReducer,
  checkoutBillingFormError : checkoutBillingFormErrorReducer,
  checkoutchangedShippingForm: checkoutChangedShippingFormReducer,
  checkoutchangedShippingFormError: checkoutChangedShippingFormErrorReducer,
  authUser: authUserReducer,
  orderReducer: OrdersReducer
})

export type AppState = ReturnType<typeof rootReducer>