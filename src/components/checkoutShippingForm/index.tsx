import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SigninArea from './SigninArea'

const index = () => {
  return (
    <Container>
      <Row className='shopping-form-area'>
        <Col className='shopping-form-area-div' xs={12} sm={12} md={6} lg={{span: 7, offset: 5}}>
          <SigninArea />

          <Row className='billing-address'>
            <Col className='billing-address-header'>
             <h5>Shipping and Billing Address</h5>

            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default index
