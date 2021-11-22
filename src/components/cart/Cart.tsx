import React, { useState } from "react";
import { Col, Dropdown, Image, Row } from "react-bootstrap";
import { ICartProduct } from "../../types/cartAreaTypes";
import emptyCartImage from "../../asserts/images/emptyCart.webp";
import CartProductsList from './CartProductsList';
import CartSubTotal from "./CartSubTotal";
import CartDiscount from "./CartDiscount";
import CartTotal from "./CartTotal";

const Cart: React.FC = () => {

  const initCartProducts: ICartProduct[] =
  [
    {id: 1, name: 'Carrot', qty: 5, price: 2008.99},
    {id: 2, name: 'coconut', qty: 10, price: 1550.65},
    {id: 3, name: 'Dal', qty: 5, price: 1500},
    {id: 4, name: 'cake', qty: 5, price: 150.62}
  ];

  const [cartProducts, setCartProducts] = useState<ICartProduct[] | null>(initCartProducts);

  const RenderCartArea = () => {
    if(!cartProducts || cartProducts.length === 0){
      return (
        <div className='empty-cart'>
          <Dropdown.Menu className='mt-2' align='right'>
            <Col xs={12}><Image src={emptyCartImage}  className='empty-cart-image'/></Col>
            <Col xs={12} className='empty-cart-row-1'>Your Cart is empty</Col>
            <Col xs={12} className='empty-cart-row-2'>Add items to your cart :)</Col>
          </Dropdown.Menu>
        </div>
      );
    } else {
      return (
        <div className='cart-products'>
          <Dropdown.Menu>
            <CartProductsList cartProducts={cartProducts} />
            <CartSubTotal numberOfProduct={cartProducts.length} 
                          priceMain={1110} 
                          priceCents={34}                          
            />
            <CartDiscount DiscountInteger={100} 
                          DiscountCents={44} 
            />
            <CartTotal TotalInteger={1000} 
                      TotalCents={21}/>
            <Row className='mx-1'>
              <Col>
                <button className='cart-checkout-btn'>Checkout</button>
              </Col>
            </Row>
          </Dropdown.Menu>
        </div>
      )
    }

  };

  return (
    <React.Fragment>{RenderCartArea()}</React.Fragment>
  )
}

export default Cart;