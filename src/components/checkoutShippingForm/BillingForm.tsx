import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { changeCheckoutForm } from '../../state/actions/checkoutFormActions'

import { AppState } from '../../state/reducers'

const BillingForm: React.FC = () => {
  const checkoutForm = useSelector((state: AppState) => state.checkoutForm);
  const checkoutFormErrors = useSelector( (state: AppState) => state.checkoutFormError);

  const dispatch = useDispatch();

  const handleOnFullNameChanged = (fullName: string) => {
    dispatch(changeCheckoutForm({key: 'fullName' , value: fullName}))
  }

  const handleOnAddressChanged = (address: string) => {
    dispatch(changeCheckoutForm({key: 'address', value: address}))
  }

  return (
    <Col className='billing-form' xs={12} sm={12}>
      <Form>
        <Form.Group controlId="billingAddressFullName">
          <Form.Label>Full Name*</Form.Label>
          <Form.Control value={checkoutForm.fullName}
                        type="text"
                        placeholder="Your Full Name"
                        required
                        pattern="^[A-Za-z][A-Za-z\s]*$"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleOnFullNameChanged(event.target.value)}
          />
          <Row>
            <span className='error-message'>
              {checkoutFormErrors.fullNameError && checkoutFormErrors.fullNameError}
            </span>
          </Row>
        </Form.Group>

        
        <Form.Group controlId="billingAddressAddress">
          <Form.Label>Address*</Form.Label>
          <Form.Control placeholder="Street Address"
                        required
                        value={checkoutForm.address}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleOnAddressChanged(event.target.value)}
          />
          <Row>
            <span className='error-message'>
              {checkoutFormErrors.addressError && checkoutFormErrors.addressError}
            </span>
          </Row>
        </Form.Group>
      </Form>
    </Col>
  )
}

export default BillingForm
