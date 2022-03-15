import React from 'react'
import { Col, Form } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { changeCheckoutForm } from '../../state/actions/checkoutFormActions'

import { AppState } from '../../state/reducers'

const BillingForm: React.FC = () => {
  const checkoutForm = useSelector((state: AppState) => state.checkoutForm);
  const dispatch = useDispatch();

  const handleOnFullNameChanged = (fullName: string) => {
    dispatch(changeCheckoutForm({key: 'fullName' , value: fullName}))
  }
  return (
    <Col className='billing-form'>
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

        </Form.Group>
      </Form>
    </Col>
  )
}

export default BillingForm
