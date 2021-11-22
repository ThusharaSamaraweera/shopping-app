import React from "react";
import { ICartProduct } from "../../types/cartAreaTypes";
import CartProduct from "./CartProduct";

type CartProductsListProps = {
  cartProducts: ICartProduct[] | null
  setCartProducts : (cartProducts: ICartProduct[] | null)  => void
}

const CartProductsList:React.FC<CartProductsListProps> = (props) => {

  const handleOnDeleteCartProduct = (id: number) => {
    if(!props.cartProducts) {
      return;
    }

    props.setCartProducts(props.cartProducts.filter( (product: ICartProduct) => 
      product.id !== id
      ))
  };

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
                          key={cartProudct.id} OnDeleteCartProduct={handleOnDeleteCartProduct}
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