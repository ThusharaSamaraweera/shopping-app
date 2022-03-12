import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NumberFormat from 'react-number-format'

const DeliveryCharge = () => {

  return (
    <Col xs={12}>
      <Row className='mx-4 delivery-charge py-3'>
        <Col className='delivery-label'>Delivery Charge</Col>
        <Col className='text-end delivery-price'>
          <NumberFormat value={'0'}
                        thousandSeparator={true}
                        displayType='text'
                        prefix={'Rs. '}
                        decimalScale={2}
                        fixedDecimalScale={true}
          />
        </Col>
      </Row>
    </Col>
  )
}

export default DeliveryCharge
