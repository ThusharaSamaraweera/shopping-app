import React, { PropsWithChildren } from "react";
import {Button, Col, Row, Dropdown} from "react-bootstrap";
import {ShoppingCart} from "react-feather";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../state/reducers";
import Cart from "../cart/Cart";

const MainMiddleNavBar: React.FC = () => {
  const quantity = useSelector( (state: AppState) => state.cartProducts.cartProducts.length);
  const CustomToggle = React.forwardRef<HTMLAnchorElement, PropsWithChildren<any>>(
    ({onClick}, ref) => (
      <a
        href="#icon"
        ref={ref}
        onClick={ e => {
          e.preventDefault()
          onClick(e);
        }}
      >
        {
          <div className='shopping-cart-icon'>
            <i className='cart-icon'><ShoppingCart size='2em'/></i>
            <span className='dot'>{quantity}</span>
          </div>
        }
      </a>
    )
  )

  return (
    <Row className='main-middle-nav-bar sticky-top py-2'>
      <Col xs={6} sm={2} md={2} lg={2} className='logo-col'>
        <Link to={'/'} className='logo py-2'>LOGO</Link>
      </Col>
      <Col xs={6} sm={{span: 1, offset: 7}} md={{span: 1, offset: 7}} lg={{span: 1, offset: 8}}
           className='shopping-cart py-2'>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-compnents'>
          </Dropdown.Toggle>
          <Cart/>
        </Dropdown>
      </Col>
      <Col sm={2} md={2} lg={1} className='check-out-col py-2'>
        <Button variant="success" size='sm' className='checkout-btn'>
          <Link to={'/checkout'}>Checkout</Link>
        </Button>
      </Col>
    </Row>
  );
}

export default MainMiddleNavBar;