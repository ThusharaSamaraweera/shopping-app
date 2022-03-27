import * as ACTIONS from '../actionConstants/checkoutForm';
import { 
  changeCheckoutBillingFormActionType, 
  changeCheckoutBillingFormErrorActionType
} from '../actionTypes/checkoutFormActionTypes';
import { 
  ICheckoutBillingForm, 
  ICheckoutBillingFormError 
} from '../../types/checkoutAreaTypes';
import { SriLanka } from '../../components/constants/countries';

const checkoutBillingFormInitState: ICheckoutBillingForm = {
  fullName: '',
  address: '',
  city : '',
  postalCode: '',
  country: {value: SriLanka, label: SriLanka},
  contactNumber: '',
  email: '',
  retypedEmail: '',
  password: '',
  isChangeShippingAddressVisible: false,
  deliveryInstructions: '',
  paymentMethod: 'cashOnDelivery'
}

export function checkoutBillingFormReducer(  
  state: ICheckoutBillingForm = checkoutBillingFormInitState,
  action: changeCheckoutBillingFormActionType
  ) : ICheckoutBillingForm {
    switch(action.type ) {
      case ACTIONS.CHANGE_CHECKOUT_BILLING_FORM_DATA:
         // @ts-ignore
        state[action.payload.key] = action.payload.value;
        const updatedState = {...state};
        return updatedState;

      default: 
        return state;
   
    } 
}

const checkoutBillingFormErrorInitError: ICheckoutBillingFormError = {
  fullNameError: '',
  addressError: '',
  cityError: '',
  postalCodeError: '',
  contactNumberError: '',
  emailError: '',
  retypedEmailError: '',
  passwordError: '',
}

export function checkoutBillingFormErrorReducer( 
  state: ICheckoutBillingFormError = checkoutBillingFormErrorInitError,
  action: changeCheckoutBillingFormErrorActionType
): ICheckoutBillingFormError {
    switch(action.type) {
      case ACTIONS.CHANGE_CHECKOUT_BILLING_FORM_ERROR : 
        state[action.payload.key] = action.payload.value;
        const updatedState = {...state};
        return updatedState
      
      default: 
        return state;
    }
}


