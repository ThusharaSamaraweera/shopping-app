import React from 'react'
import {Row, Col, Image} from 'react-bootstrap';
import { Trash } from 'react-feather';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import {useDispatch} from 'react-redux';
import { removeCartProduct } from '../../state/actions/cartProductActions';
import { IProduct } from '../../types/shoppingAreaTypes';

type CartProductProps = {
  product: IProduct
}

const CartProduct:React.FC<CartProductProps> = (props) => {
  // const image: any = require(`../../asserts/images/ProductImages/${props.id}.jpg`);
  const priceMain: number = Math.trunc(props.product.discount_price);
  const priceCents = () => {
    if (props.product.discount_price % 1 === 0) {
      return '00'
    } else {
      return Math.trunc(props.product.discount_price % 1 * 100)
    }
  };

  const dispactch = useDispatch();

  const handleOnDeleteCartProduct = (id: number) => {
    dispactch(removeCartProduct(id));    
  };

  return (
    <Row className='py-2 mx-1 cart-product'>
      <Col xs={3}><Image src={props.product.image} alt="image not found" className='cart-product-image'/></Col>
      <Col xs={9}>
        <Row>
          <Col className='cart-product-name pt-1' xs={10}>{props.product.title}</Col>
          <Col className='cart-product-delete-btn' xs={2}>
            <Trash size='1em' onClick={ () => handleOnDeleteCartProduct(props.product.id)}/>
          </Col>
        </Row>
        <Row className='py-2'>
          <Col xs={4} className='cart-product-qty'>Qty. {props.product.quantity}</Col>
          <Col xs={8} className='cart-product-price text-end'>
            {ProductPrice(priceMain, priceCents(), '', 'small-cents', undefined, false)}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CartProduct;