import React from 'react'
import {Row, Col, Image} from 'react-bootstrap';
import { Trash } from 'react-feather';
import { ProductPrice } from '../ProductPrice/ProductPrice';

type CartProductProps = {
  id: number
  name: string
  qty: number
  price: number
  OnDeleteCartProduct : (id: number) => void
}

const CartProduct:React.FC<CartProductProps> = (props) => {
  const image: any = require(`../../asserts/images/ProductImages/${props.id}.jpg`);
  const priceMain: number = Math.trunc(props.price);
  const priceCents = () => {
    if (props.price % 1 === 0) {
      return '00'
    } else {
      return Math.trunc(props.price % 1 * 100)
    }
  };

  return (
    <Row className='py-2 mx-1 cart-product'>
      <Col xs={3}><Image src={image.default} alt="image not found" className='cart-product-image'/></Col>
      <Col xs={9}>
        <Row>
          <Col className='cart-product-name pt-1' xs={10}>{props.name}</Col>
          <Col className='cart-product-delete-btn' xs={2}>
            <Trash size='1em' onClick={ () => props.OnDeleteCartProduct(props.id)}/>
          </Col>
        </Row>
        <Row className='py-2'>
          <Col xs={4} className='cart-product-qty'>Qty. {props.qty}</Col>
          <Col xs={8} className='cart-product-price text-end'>
            {ProductPrice(priceMain, priceCents(), '', 'small-cents')}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CartProduct;