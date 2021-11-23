import { unwatchFile } from "fs";
import React from "react";
import {Row, Col} from 'react-bootstrap';
import { ProductPrice } from "../ProductPrice/ProductPrice";

type CartSubTotalProps = {
  numberOfProduct : number
  priceMain : number
  priceCents : number | string
}

const CartSubTotal: React.FC<CartSubTotalProps> = (props) => {

  return (
    <Row className='cart-subtotal py-2 mx-1'>
      <Col xs={5}>Subtotal ({props.numberOfProduct})</Col>
      <Col xs={7} lg={6} className='cart-subtotal-price text-end'>
        {ProductPrice(props.priceMain, props.priceCents, '', '', undefined, false)}
      </Col>
    </Row>
  )
}

export default CartSubTotal;