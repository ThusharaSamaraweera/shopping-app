import { IProduct } from "../types/shoppingAreaTypes";

export const updateSesstionStorageCart = (tempCart: IProduct[]) => {
  sessionStorage.removeItem("cart");
  sessionStorage.setItem("cart", JSON.stringify(tempCart));
};
