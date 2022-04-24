import * as ACTIONS from '../actionConstants/checkoutForm';
import { 
  ICheckoutBillingFormInputData, 
  ICheckoutBillingFormInputDataError, 
  ICheckoutShippingFormInputData, 
  ICheckoutShippingFormInputDataError
} from '../../types/checkoutAreaTypes';
import { 
  changeCheckoutBillingFormActionType, 
  changeCheckoutBillingFormErrorActionType, 
  changeCheckoutShippingFormActionType, 
  changeCheckoutShippingFormErrorActionType 
} from '../actionTypes/checkoutFormActionTypes';

export function changeCheckoutBillingForm(data: ICheckoutBillingFormInputData) 
: changeCheckoutBillingFormActionType  {
  return {
    type: ACTIONS.CHANGE_CHECKOUT_BILLING_FORM_DATA,
    payload: data
  }
}

export function changeCheckoutBillingFormError (error: ICheckoutBillingFormInputDataError)
 : changeCheckoutBillingFormErrorActionType {
  return {
    type : ACTIONS.CHANGE_CHECKOUT_BILLING_FORM_ERROR,
    payload: error
  }
}

export function changeCheckoutShippingForm(data: ICheckoutShippingFormInputData) 
: changeCheckoutShippingFormActionType  {
  return {
    type: ACTIONS.CHANGE_CHECKOUT_SHIPPING_FORM_DATA,
    payload: data
  }
}

export function changeCheckoutShippingFormError (error: ICheckoutShippingFormInputDataError)
 : changeCheckoutShippingFormErrorActionType {
  return {
    type : ACTIONS.CHANGE_CHECKOUT_SHIPPING_FORM_ERROR,
    payload: error
  }
}






