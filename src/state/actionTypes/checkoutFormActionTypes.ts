import  * as ACTIONS from '../actionConstants/checkoutForm';
import { ICheckoutFormInputData, ICheckoutFormInputDataError } from '../../types/checkoutAreaTypes';

export interface changeCheckoutFormActionType {
  type: typeof ACTIONS.CHANGE_CHECKOUT_FORM_DATA,
  payload: ICheckoutFormInputData
}

export interface changeCheckoutFormErrorActionType {
  type: typeof ACTIONS.CHANGE_CHECKOUT_FORM_ERROR,
  payload: ICheckoutFormInputDataError
}