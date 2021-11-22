import React from "react";
import {Row, Col} from 'react-bootstrap';
import { ProductPrice } from "../ProductPrice/ProductPrice";

type CartDiscountProps = {
  DiscountInteger : number
  DiscountCents : number | string
}

const CartDiscount: React.FC<CartDiscountProps> = (props) => {

  return (
    <Row className='cart-discount mx-1'>
      <Col xs={4}>Discount</Col>
      <Col xs={8} lg={7}className='cart-discount-price text-end'>
       {ProductPrice(props.DiscountInteger, props.DiscountCents, '', '')}
      </Col>
    </Row>
  )
}

export default CartDiscount;