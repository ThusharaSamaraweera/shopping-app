import React, { useState } from "react";
import { Col, Dropdown, Image } from "react-bootstrap";
import { ICartProduct } from "../../types/cartAreaTypes";
import emptyCartImage from "../../asserts/images/emptyCart.webp";

const Cart: React.FC = () => {

  const initCartProducts: ICartProduct[] =
  [
    {id: 1, name: 'Carrot', qty: 5, price: 20088.99},
    {id: 2, name: 'coconut', qty: 10, price: 15500.65},
    {id: 3, name: 'Dal', qty: 5, price: 150000},
    {id: 4, name: 'cake', qty: 5, price: 150.62}
  ];

  const [cartProducts, setCartProducts] = useState<ICartProduct[] | null>(initCartProducts);


  const emptyCart = () => {
    return (
      <div className='empty-area'>
        <Dropdown.Menu className='mt-2' align='right'>
          <Col xs={12}><Image src={emptyCartImage}  className='empty-cart-image'/></Col>
          <Col xs={12} className='empty-cart-row-1'>Your Cart is empty</Col>
          <Col xs={12} className='empty-cart-row-2'>Add items to your cart :)</Col>
        </Dropdown.Menu>
      </div>
    )
  }

  return (
    <div>
      
    </div>
  )
}

export default Cart;