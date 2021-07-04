import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {ShoppingCart} from "react-feather";

const MainMiddleNavBar: React.FC = () => {
  return (
    <Row className='main-middle-nav-bar sticky-top py-2'>
      <Col xs={6} sm={2} md={2} lg={2} className='logo-col'>
        <a href='#home' className='logo py-2'>LOGO</a>
      </Col>
      <Col xs={6} sm={{span: 1, offset: 7}} md={{span: 1, offset: 7}} lg={{span: 1, offset: 8}}
           className='shopping-cart-icon py-2'>
        <i className='cart-icon'><ShoppingCart size='2em'/></i>
        <span className='dot'>2</span>
      </Col>
      <Col hidden-xs sm={2} md={2} lg={1} className='check-out-col py-2'>
        <Button variant="success" size='sm' className='checkout-btn'>Checkout</Button>
      </Col>
    </Row>
  );
}

export default MainMiddleNavBar;