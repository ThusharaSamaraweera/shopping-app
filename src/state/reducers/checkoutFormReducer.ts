import * as ACTIONS from '../actionConstants/checkoutForm';
import { changeCheckoutFormActionType, changeCheckoutFormErrorActionType } from '../actionTypes/checkoutFormActionTypes';
import { ICheckoutForm, ICheckoutFormError } from '../../types/checkoutAreaTypes';

const checkoutFormInitState: ICheckoutForm = {
  fullName: '',
  address: ''
}

export function checkoutFormReducer(  state: ICheckoutForm = checkoutFormInitState,
                                      action: changeCheckoutFormActionType
  ) : ICheckoutForm {
    switch(action.type ) {
      case ACTIONS.CHANGE_CHECKOUT_FORM_DATA:
        state[action.payload.key] = action.payload.value;
        const updatedState = {...state};
        return updatedState;

      default: 
        return state;
   
    }  
  }

  const checkoutFormErrorInitError: ICheckoutFormError = {
    fullNameError: 'Full name required',
    addressError: 'Address required'
  }

  export function checkoutFormErrorReducer( state: ICheckoutFormError = checkoutFormErrorInitError,
                                            action: changeCheckoutFormErrorActionType
    ): ICheckoutFormError {
      switch(action.type) {
        case ACTIONS.CHANGE_CHECKOUT_FORM_ERROR : 
          state[action.payload.key] = action.payload.value;
          const updatedState = {...state};
          return updatedState
        
        default: 
          return state;
      }
    }