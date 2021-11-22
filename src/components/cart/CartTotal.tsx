import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProductPrice } from "../ProductPrice/ProductPrice";

type CartTotalProps = {
  TotalInteger: number
  TotalCents: number | string
}

const CartTotal: React.FC<CartTotalProps> = (props) => {

  return (
    <Row className='cart-Total py-3 mx-1'>
      <Col xs={4}>Est.Total</Col>
      <Col xs={8} lg={7} className='cart-Total-price text-end'>
        {ProductPrice(props.TotalInteger, props.TotalCents, '', '')}
      </Col>
    </Row>
  )
}

export default CartTotal;