import React from 'react'
import {Row, Col, Image} from 'react-bootstrap';
import { Trash } from 'react-feather';

type CartProductProps = {
  id: number
  name: string
  qty: number
  price: number
}

const CartProduct:React.FC<CartProductProps> = (props) => {
  const image: any = require(`../../asserts/images/ProductImages/${props.id}.jpg`);

  return (
    <Row className='py-2 mx-1 cart-product'>
      <Col xs={4}><Image src={image.default} alt="image not found" className='cart-product-image'/></Col>
      <Col xs={8}>
        <Row>
          <Col className='cart-product-name pt-1' xs={10}>{props.name}</Col>
          <Col className='cart-product-delete-btn' xs={2}>
            <Trash size='1em'/>
          </Col>
        </Row>
        <Row className='py-2'>
          <Col xs={3} className='cart-product-qty'>Qty. {props.qty}</Col>
          <Col xs={9} className='cart-prodcu-price text-end'>
            
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CartProduct;