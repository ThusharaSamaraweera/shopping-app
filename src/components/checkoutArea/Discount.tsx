import React, {useState} from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const Discount: React.FC = () => {
  const [discountCode, setDiscountCode] = useState<string>('');

  return (
    <Col>
      <Form>
        <Row className='px-1 discount'>
          <Col xs={12} md={{span: 6, offset: 6}} sm={12} className='text-end'>
            <Row>
              <Col xs={4} md={4} className='discount-label text-end mt-2'>
                  <span>Have a discount code?</span>
              </Col>

              <Col className='form-column' xs={5} sm={5} md={5} lg={5} xl={6}>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control size="sm"
                                  className="checkout-discount"
                                  value={discountCode}

                    />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Col>
  )
}

export default Discount
