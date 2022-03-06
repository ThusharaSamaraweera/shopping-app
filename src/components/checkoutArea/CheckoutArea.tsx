import React from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import {ChevronLeft, Trash} from "react-feather";
import { useHistory } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from "react-number-format";

import { columns, options } from '../constants/checkoutAreaContants';
import { AppState } from '../../state/reducers';
import {removeCartProduct} from "../../state/actions/cartProductActions";

import { smallCentsWithPrefix } from '../common/NumberCommon';

// types
import {IProduct} from "../../types/shoppingAreaTypes";
import { CheckoutTableItem } from '../../types/checkoutAreaTypes';
import EditableQty from './EditableQty';

const CheckoutArea: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClickContinueBtn = () => {
    history.push('/')  
  }

  const items:IProduct[] = useSelector( (state: AppState) => state.cartProducts.cartProducts);

  const handleRemoveItem = (id: string) => {
    dispatch(removeCartProduct(id));
  }

  const listRows = () => {
    return items.map( (item: IProduct, index: number) => {
      const itemRow: CheckoutTableItem = {
        key: index + 1,
        name: item.title,
        image :<Image src={item.image} alt="image not found" className='cart-product-image'/>,
        qty: <EditableQty item={item} />,
        unitPrice: <NumberFormat  value={item.regular_price - item.discount_price} thousandSeparator={true}
                                  displayType='text'
                                  prefix={'Rs. '}
                                  decimalScale={2} fixedDecimalScale={true} renderText={smallCentsWithPrefix}
                    />,
        amount: <NumberFormat value={item.quantity ?
                                item.quantity * (item.regular_price - item.discount_price) :
                                (item.regular_price - item.discount_price)
                              }
                              thousandSeparator={true}
                              displayType='text'
                              prefix={'Rs. '}
                              decimalScale={2} fixedDecimalScale={true} renderText={smallCentsWithPrefix}
                />,
        removeIcon :  <Trash size='1.3em' className="remove-btn"
                        onClick={() => handleRemoveItem(item.id)} 
                      />
      };

      return itemRow;
    });
  };

  const getTable = () => {
    return <BootstrapTable  bootstrap4
                            keyField='key'
                            classes={`custom-table item-table`}
                            columns={columns}
                            data={listRows()}
                            pagination={paginationFactory(options)}
                            wrapperClasses="table-responsive"
          />
  }

  return (
    <Container className='checkout-area'>
      <Row className='py-5'>
        <Col xs={12} sm={8} md={9} className='checkout-page-title'>
          <h5 className='sm:pl-3'>Checkout Page</h5>
        </Col>

        <Col xs={12} sm={4} md={3} className='text-end'>
          <Button   className='continue-shopping-btn w-100'
                    variant='outline-dark'
                    onClick={handleOnClickContinueBtn}
          >
            <ChevronLeft size='1em'/>Continue Shopping
          </Button>
        </Col>
      </Row>

      <Row className='checkout-table-area'>
        <Col xs={12} sm={12} className='py-3 checkout-table-title'>Shopping Cart </Col>
        <Col xs={12} sm={12}>
          <Card.Body className="pt-0">
            {getTable()}
          </Card.Body>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutArea;