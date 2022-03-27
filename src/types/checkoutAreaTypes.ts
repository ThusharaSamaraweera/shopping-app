export interface CheckoutTableItem {
  key: number;
  name: string;
  image: JSX.Element;
  qty: JSX.Element;
  unitPrice: JSX.Element;
  amount: JSX.Element;
  removeIcon: JSX.Element;
}

export interface CountrySelect {
  value: string,
  label: string
}

export interface ICheckoutBillingFormInputData {
  key: "fullName"
    | "address"
    | "city"
    | "postalCode"
    | "country"
    | "contactNumber"
    | "email"
    | "retypedEmail"
    | "password"
    | "isChangeShippingAddressVisible"
    | "deliveryInstructions"
    | "paymentMethod"
  value: string | CountrySelect | boolean
}

export interface ICheckoutBillingFormInputDataError {
  key: 'fullNameError'
  | 'addressError'
  | 'cityError'
  | 'postalCodeError'
  | 'contactNumberError'
  | 'emailError'
  | 'retypedEmailError'
  | 'passwordError'
  value: string
}

export interface ICheckoutBillingForm {
  fullName: string,
  address: string,
  city: string,
  postalCode: string,
  country: CountrySelect,
  contactNumber: string,
  email: string,
  retypedEmail: string
  password: string,
  isChangeShippingAddressVisible: boolean,
  deliveryInstructions: string,
  paymentMethod: 'cashOnDelivery' | 'onlinePayment',
}

export interface ICheckoutBillingFormError {
  fullNameError: string
  addressError: string  
  cityError: string
  postalCodeError: string
  contactNumberError: string
  emailError: string
  retypedEmailError: string
  passwordError: string
}

export interface ICheckoutShippingFormInputData {
  key: "fullName",
  value: string
}

export interface ICheckoutShippingFormInputDataError {
  key: "fullNameError",
  value: string
}

export interface ICheckoutChangedShippingForm {
  fullName: string,
}

export interface ICheckoutChangedShippingFormError {
  fullNameError: string
}
