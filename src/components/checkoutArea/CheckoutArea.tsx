import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {ChevronLeft} from "react-feather";

const CheckoutArea: React.FC = () => {
  const handleOnClickContinueBtn = () => {

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
    </Container>
  )
}

export default CheckoutArea;