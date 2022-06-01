import { ICheckoutShippingFormInputData } from "./checkoutAreaTypes";
import { IProduct, IProducts } from "./shoppingAreaTypes";

export interface IOrder {
  id: string;
  orderCode: string;
  requestedUser: IRequestedUser;
  productList: IProducts;
  shippingDetails: IShippingDetails;
  status: string;
  paymentType: string;
  paymentStatus: boolean;
  deliveryInstructions: string;
  requestedDate: string;
}

interface IRequestedUser {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
}

export interface IOrderReduxStore {
  orders: IOrder[]
}

export interface IShippingDetails {
  fullName: string
  address: string
  city: string
  postalCode: string
  country: string
  contactNumber: string
}
