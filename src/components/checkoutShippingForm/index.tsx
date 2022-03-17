import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BillingForm from './BillingForm'
import ChangeShippingAddress from './ChangeShippingAddress'
import DeliveryInstructions from './DeliveryInstructions'
import PaymentMethod from './PaymentMethod'
import SigninArea from './SigninArea'

const index: React.FC = () => {
  return (
    <Container>
      <Row className='shopping-form-area'>
        <Col className='shopping-form-area-div p-0' xs={12} sm={12} md={12} lg={{span: 7, offset: 5}}>
          <SigninArea />

          <Row className='billing-address'>
            <Col className='billing-address-header'>
              <h5>Shipping and Billing Address</h5>
            </Col>
            <BillingForm />
          </Row>
          <ChangeShippingAddress />
          <DeliveryInstructions />
          <PaymentMethod />
        </Col>
      </Row>
    </Container>
  )
}

export default index
