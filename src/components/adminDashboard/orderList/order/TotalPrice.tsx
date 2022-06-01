import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NumberFormat from 'react-number-format'
import DeliveryCharge from '../../../checkoutArea/DeliveryCharge'
import TotalBill from '../../../checkoutArea/TotalBill'

const TotalPrice = () => {
  const calculateTotalPrice = () => {

  }

  return (
    <Row>
      <Col xs={{offset: '4', span: '8'}} className='total-bill-section'>
          <Col xs={12} className='total-price '>
            <Row className='py-2 ml-4'>
              <Col className='total-bill-label'>Total price: </Col>
              <Col className='text-end total-bill-price'>
                <NumberFormat value={100}
                              thousandSeparator={true}
                              displayType='text'
                              prefix={'Rs. '}
                              decimalScale={2}
                              fixedDecimalScale={true}
                />
              </Col>
            </Row>
          </Col>

        <DeliveryCharge/>
        <TotalBill subTotalPrice={1000}/>
      </Col>
    </Row>
  )
}

export default TotalPrice