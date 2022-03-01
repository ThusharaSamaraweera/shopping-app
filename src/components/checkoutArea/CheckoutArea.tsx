import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {ChevronLeft} from "react-feather";
import { useHistory } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';

import { columns } from '../constants/checkoutAreaContants';

const CheckoutArea: React.FC = () => {
  const history = useHistory();

  const handleOnClickContinueBtn = () => {
    history.push('/')  
  }

  const listRows = () => {
    return []
    
  }

  const getTable = () => {
    return <BootstrapTable  bootstrap4
                            keyField='key'
                            classes={`custom-table item-table`}
                            columns={columns}
                            data={listRows()}
                            wrapperClasses="table-responsive"
          />
  }

  return (
    <Container className='checkout-area'>
      <Row className='py-5'>
        <Col xs={12} sm={8} md={9} className='checkout-page-title'>
          <h5 className='pl-3'>Checkout Page</h5>
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

      <Row>
        <Col xs={12} sm={12} className='py-3 checkout-table-title'>Shopping Cart </Col>
        <Col xs={12} sm={12}>{getTable()}</Col>
      </Row>
    </Container>
  )
}

export default CheckoutArea;