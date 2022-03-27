import {ICheckoutChangedShippingForm, ICheckoutChangedShippingFormError} from "../../types/checkoutAreaTypes";
import { changeCheckoutShippingFormActionType, changeCheckoutShippingFormErrorActionType } from "../actionTypes/checkoutFormActionTypes";
import * as ACTIONS from '../actionConstants/checkoutForm';

const checkoutChangedShippingFormInit = {
  fullName: '',
}

export function checkoutChangedShippingFormReducer(  
  state: ICheckoutChangedShippingForm = checkoutChangedShippingFormInit,
  action: changeCheckoutShippingFormActionType
) : ICheckoutChangedShippingForm {
    switch(action.type ) {
      case ACTIONS.CHANGE_CHECKOUT_SHIPPING_FORM_DATA:
        //ts-ignore
        state[action.payload.key] = action.payload.value;
        const updatedState = {...state}
        return updatedState;
      default: 
        return state;
    } 
}

const checkoutChangedShippingFormErrorInit: ICheckoutChangedShippingFormError = {
  fullNameError: '',
}

export function checkoutChangedShippingFormErrorReducer(  
  state: ICheckoutChangedShippingFormError = checkoutChangedShippingFormErrorInit,
  action: changeCheckoutShippingFormErrorActionType
) : ICheckoutChangedShippingFormError {
  switch(action.type ) {
    case ACTIONS.CHANGE_CHECKOUT_SHIPPING_FORM_ERROR:
      state[action.payload.key] = action.payload.value;
      const updatedState = {...state}
      return updatedState;
    default:
      return state;
  }
}

