import { ICheckoutShippingFormInputData } from "./checkoutAreaTypes";
import { IProduct, IProducts } from "./shoppingAreaTypes";

export interface IOrder {
  id: string;
  orderCode: string;
  requestedUser: IRequestedUser;
  productList: IProducts;
  ShippingDetails: ICheckoutShippingFormInputData;
  status: string;
  paymentType: string;
  paymentStatus: boolean;
  deliveryInstructions: string;
  requestedDate: string;
}

interface IRequestedUser {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  contactNumber: string;
}

export interface IOrderReduxStore {
  orders: IOrder[]
}
