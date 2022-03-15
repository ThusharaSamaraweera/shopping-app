import * as ACTIONS from '../actionConstants/checkoutForm';
import { ICheckoutFormInputData, ICheckoutFormInputDataError } from '../../types/checkoutAreaTypes';
import { changeCheckoutFormActionType, changeCheckoutFormErrorActionType } from '../actionTypes/checkoutFormActionTypes';

export function changeCheckoutForm(data: ICheckoutFormInputData) : changeCheckoutFormActionType  {
  return {
    type: ACTIONS.CHANGE_CHECKOUT_FORM_DATA,
    payload: data
  }
}

export function changeCheckoutFormError (error: ICheckoutFormInputDataError) : changeCheckoutFormErrorActionType {
  return {
    type : ACTIONS.CHANGE_CHECKOUT_FORM_ERROR,
    payload: error
  }
}