import React from 'react'
import {Row, Col, Image} from 'react-bootstrap';

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
    </Row>
  )
}

export default CartProduct;