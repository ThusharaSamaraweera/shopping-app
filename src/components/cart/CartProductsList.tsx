import React from "react";
import { ICartProduct } from "../../types/cartAreaTypes";
import CartProduct from "./CartProduct";

type CartProductsListProps = {
  cartProducts: ICartProduct[] | null
}

const CartProductsList:React.FC<CartProductsListProps> = (props) => {

  const renderCartProducts = () => {
    if(!props.cartProducts){
      return;
    }

    if(props.cartProducts.length === 0){
      return;
    }

    return props.cartProducts.map( (cartProudct: ICartProduct) => {
      return <CartProduct name={cartProudct.name}
                          id={cartProudct.id}
                          qty={cartProudct.qty}
                          price={cartProudct.price}
                          key={cartProudct.id}
              />
      })
  }

  return (
    <div className='cart-product-list'>
      {renderCartProducts()}
    </div>
  )
}

export default CartProductsList;