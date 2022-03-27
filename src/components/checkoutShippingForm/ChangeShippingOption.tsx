import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { changeCheckoutBillingForm } from '../../state/actions/checkoutFormActions';
import { AppState } from '../../state/reducers'

const ChangeShippingAddress = () => {
  const dispatch = useDispatch();
  const checkoutForm = useSelector((state: AppState) => state.checkoutForm);
  
  const handleOnChangeShippingAddress = (isChangeShippingAddressVisible: boolean) => {
    dispatch(changeCheckoutBillingForm({key: 'isChangeShippingAddressVisible', value: isChangeShippingAddressVisible}))
  }

  return (
    <Row className='change-shipping-address-area'>
      <Col xs={12} sm={12} className='pt-4 change-shipping-option'>
        <p className='address-title'>Change Shipping Address</p>
      </Col>
      <Col xs={12} sm={12} className='mb-3 address-radio-area'>
        <Form.Check
          type='radio'
          name='address-group'
          label='Same as user address'
          id='same'
          className='form-check'
          custom
          defaultChecked={!checkoutForm.isChangeShippingAddressVisible}
          onClick={() => handleOnChangeShippingAddress(false)}
        />
        <Form.Check
          type='radio'
          name='address-group'
          label='Change shipping address'
          id='other'
          className='form-check'
          custom
          defaultChecked={checkoutForm.isChangeShippingAddressVisible}
          onClick={() => handleOnChangeShippingAddress(true)}
        />
      </Col>
      
    </Row>
  )
}

export default ChangeShippingAddress
