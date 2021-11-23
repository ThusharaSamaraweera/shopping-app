import React from 'react'
import { Col, Row, Image } from 'react-bootstrap';
import { IProduct } from '../../types/shoppingAreaTypes';
import { ProductPrice } from '../ProductPrice/ProductPrice';

type ProductProps = {
  key: number
  product: IProduct
}
const Produst: React.FC<ProductProps> = (props) => {

  const regularPriceMain: number = Math.trunc(props.product.regular_price);
  const regularPriceCents = () => {
    if (props.product.regular_price % 1 === 0) {
      return '00'
    } else {
      return Math.trunc(props.product.regular_price % 1 * 100)
    }
  };

  return (
    <Col className='product px-2 my-2' lg='3' md='4' xs='6'>
      <Row className='product-img py-2'>
        <Image src={props.product.image} />
      </Row>
      <Row className='product-title'>
        <h6>{props.product.title}</h6>
      </Row>
      <Row className='prices'>
        <Col xs={6} className='regular-price'>
          <h6>{ProductPrice(regularPriceMain, regularPriceCents(), '', '', undefined, false)}</h6>
        </Col>

      </Row>
    </Col>
  )
}

export default Produst;