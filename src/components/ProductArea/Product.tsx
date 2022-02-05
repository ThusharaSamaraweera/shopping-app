import React, { useState } from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

import { addCartProduct, updateCartProduct } from '../../state/actions/cartProductActions';
import { AppState } from '../../state/reducers';
import { IProduct } from '../../types/shoppingAreaTypes';
import { ProductPrice } from '../ProductPrice/ProductPrice';

type ProductProps = {
  key: number
  product: IProduct
}
const Produst: React.FC<ProductProps> = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const cartProducts = useSelector((state: AppState) => state.cartProducts.cartProducts);

  const isInCart = (id: number) => {
    const cartProductIDs: number[] = cartProducts.map(product => product.id);
    return cartProductIDs.includes(id);
  }

  const handleOnProductAdd = (product: IProduct) => {
    dispatch(addCartProduct({...product, quantity: quantity}));
  }

  const handleOnUpdateQuantity = (product: IProduct) => {
    dispatch(updateCartProduct({
      ...product,
      quantity: quantity
    }))
  }

  const PriceMain = (price: number) => {
    return Math.trunc(price);
  }
  const PriceCents = (price: number) => {
    if (price % 1 === 0) {
      return '00'
    } else {
      return Math.trunc(price % 1 * 100)
    }
  };

  return (
    <Col className='product-item  my-2' lg='3' md='4' xs='5'>
      <Row className=''>
        <Col className='product px-2 py-2'>
          <Row className='product-img py-4'>
            <Image className='img' src={props.product.image} />
          </Row>
          <Row className='product-title'>
            <h6>{props.product.title}</h6>
          </Row>
          <Row className='prices'>
            <Col xs={6} className='regular-price'>
              <h6>{ProductPrice(PriceMain(props.product.regular_price), 
                          PriceCents(props.product.regular_price), '', 'decimal-value', undefined, false)}</h6>
            </Col>

            <Col xs={6} className='discount-price'>
              <h6>{ProductPrice(PriceMain(props.product.discount_price), 
                          PriceCents(props.product.discount_price), '', 'decimal-value', undefined, false)}</h6>
            </Col>
          </Row>

          <Row>
            <Col className='qty-input' xs={12} sm={12} md={4} lg={4}>
              <input  type="number" min={1} className="product-count w-100" 
                      value={quantity}
                      onChange={ (event) => setQuantity(Number(event.target.value))}                    
              />
            </Col>

            <Col className='product-btn' lg={8} md={8} xs={12} sm={12}>
              {isInCart(props.product.id) ? 
                <Button className='product-update' 
                        onClick={ () => handleOnUpdateQuantity(props.product)}> Update </Button>
                :
                <Button className='product-add-to-cart' onClick={ () => handleOnProductAdd(props.product)}>Add To Cart</Button>
              }
            </Col>
          </Row>
        </Col>
      </Row>      
    </Col>
  )
}

export default Produst;