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
    | "address",
  value: string 
}

export interface ICheckoutFormInputDataError {
  key: 'fullNameError'
  | 'addressError',
  value: string
}

export interface ICheckoutForm {
  fullName: string,
  address: string,
}

export interface ICheckoutFormError {
  fullNameError: string
  addressError: string  
}
