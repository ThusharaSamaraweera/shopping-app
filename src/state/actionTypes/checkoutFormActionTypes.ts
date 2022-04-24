import  * as ACTIONS from '../actionConstants/checkoutForm';
import { 
  ICheckoutBillingFormInputData, 
  ICheckoutBillingFormInputDataError, 
  ICheckoutShippingFormInputData,
  ICheckoutShippingFormInputDataError
} from '../../types/checkoutAreaTypes';

export interface changeCheckoutBillingFormActionType {
  type: typeof ACTIONS.CHANGE_CHECKOUT_BILLING_FORM_DATA,
  payload: ICheckoutBillingFormInputData
}

export interface changeCheckoutBillingFormErrorActionType {
  type: typeof ACTIONS.CHANGE_CHECKOUT_BILLING_FORM_ERROR,
  payload: ICheckoutBillingFormInputDataError
}

export interface changeCheckoutShippingFormActionType {
  type: typeof ACTIONS.CHANGE_CHECKOUT_SHIPPING_FORM_DATA,
  payload: ICheckoutShippingFormInputData
}

export interface changeCheckoutShippingFormErrorActionType {
  type: typeof ACTIONS.CHANGE_CHECKOUT_SHIPPING_FORM_ERROR,
  payload:   ICheckoutShippingFormInputDataError

}