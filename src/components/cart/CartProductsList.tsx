import React from "react";
import { IProduct } from "../../types/shoppingAreaTypes";
import CartProduct from "./CartProduct";

type CartProductsListProps = {
  cartProducts: IProduct[] | null
}

const CartProductsList:React.FC<CartProductsListProps> = (props) => {

  const renderCartProducts = () => {
    if(!props.cartProducts){
      return;
    }

    if(props.cartProducts.length === 0){
      return;
    }

    return props.cartProducts.map( (cartProudct: IProduct) => {
      return <CartProduct product={cartProudct}
                          key={cartProudct.id} 
         />
      })
  };

  return (
    <div className='cart-product-list'>
      {renderCartProducts()}
    </div>
  )
}

export default CartProductsList;