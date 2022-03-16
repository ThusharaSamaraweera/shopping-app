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
  value: string | CountrySelect
}

export interface ICheckoutFormInputDataError {
  key: 'fullNameError'
  | 'addressError'
  | 'cityError'
  | 'postalCodeError'
  | 'contactNumberError'
  | 'emailError'
  | 'retypedEmailError'
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
}

export interface ICheckoutFormError {
  fullNameError: string
  addressError: string  
  cityError: string
  postalCodeError: string
  contactNumberError: string
  emailError: string
  retypedEmailError: string
}
