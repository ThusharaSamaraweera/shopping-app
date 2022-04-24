import React from "react";
import { Col, Dropdown, Image, Row } from "react-bootstrap";
import emptyCartImage from "../../asserts/images/emptyCart.webp";
import CartProductsList from './CartProductsList';
import CartSubTotal from "./CartSubTotal";
import CartDiscount from "./CartDiscount";
import CartTotal from "./CartTotal";
import { useSelector } from "react-redux";
import { AppState } from "../../state/reducers";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {

  const cartProducts = useSelector( (state: AppState) => state.cartProducts.cartProducts);

  const renderCartArea = () => {
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
          <Dropdown.Menu align='right'>
            <CartProductsList cartProducts={cartProducts} 
            />
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
                <button className='cart-checkout-btn'>
                  <Link to={'/checkout'}>Checkout</Link>
                </button>
              </Col>
            </Row>
          </Dropdown.Menu>
        </div>
      )
    }
  };

  return (
    <React.Fragment>{renderCartArea()}</React.Fragment>
  )
}

export default Cart;