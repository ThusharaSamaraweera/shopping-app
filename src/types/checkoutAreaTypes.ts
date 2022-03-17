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

export interface ICheckoutFormInputData {
  key: "fullName"
    | "address"
    | "city"
    | "postalCode"
    | "country"
    | "contactNumber"
    | "email"
    | "retypedEmail"
    | "password"
    | "isChangeShippingAddress"
    | "deliveryInstructions"
    | "paymentMethod"
  value: string | CountrySelect | boolean
}

export interface ICheckoutFormInputDataError {
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

export interface ICheckoutForm {
  fullName: string,
  address: string,
  city: string,
  postalCode: string,
  country: CountrySelect,
  contactNumber: string,
  email: string,
  retypedEmail: string
  password: string,
  isChangeShippingAddress: boolean,
  deliveryInstructions: string,
  paymentMethod: 'cashOnDelivery' | 'onlinePayment',
}

export interface ICheckoutFormError {
  fullNameError: string
  addressError: string  
  cityError: string
  postalCodeError: string
  contactNumberError: string
  emailError: string
  retypedEmailError: string
  passwordError: string
}
