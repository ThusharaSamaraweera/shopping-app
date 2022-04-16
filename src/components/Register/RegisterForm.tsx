import React, { useState } from 'react'
import { Col, Form } from 'react-bootstrap'

const RegisterForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleOnNameChanged = (inputName: string) => {
    setName(inputName)
  }

  const handleOnAddressChanged = (inputAddress: string) => {
    setAddress(inputAddress)
  }

  return (
    <Col className='billing-form ml-2 ml-sm-0' xs={11} sm={11} md={6}>
      <Form.Group controlId="billingAddressFullName">
        <Form.Label>Full Name*</Form.Label>
        <Form.Control value={name}
                      type="text"
                      placeholder="Your Full Name"
                      required
                      pattern="^[A-Za-z][A-Za-z\s]*$"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleOnNameChanged(event.target.value)}
        />
        <Form.Control.Feedback type="invalid" className='error-message'>
          Please provide your full name
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formGridAddress">
          <Form.Label>Address*</Form.Label>
          <Form.Control placeholder="Street Address"
                        required
                        disabled={loading}
                        value={address ? address : ''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleOnAddressChanged(event.target.value)}
          />
          <Form.Control.Feedback type="invalid" className='error-message'>
            Please provide your address
          </Form.Control.Feedback>
        </Form.Group>
    </Col>
  )
}

export default RegisterForm
