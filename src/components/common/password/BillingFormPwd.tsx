import React, { useState } from 'react'
import { Col, Form, InputGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {Eye, EyeOff} from "react-feather"

// components
import { AppState } from '../../../state/reducers';
import { changeCheckoutForm, changeCheckoutFormError } from '../../../state/actions/checkoutFormActions';
import { calcStrength } from '../../../utils/inputValidations';
import PasswordStrength from './PasswordStrength';

const BillingFormPwd = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const checkoutForm = useSelector((state: AppState) => state.checkoutForm);
  const checkoutFormErrors = useSelector( (state: AppState) => state.checkoutFormError);
 
  const handleOnShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordChange = (password: string) => {
    dispatch(changeCheckoutForm({key: 'password', value: password}));
    if (calcStrength(password)<5) {
      dispatch(changeCheckoutFormError({key: 'passwordError', value: 'Use strong password'}));
      return;
    }
    dispatch(changeCheckoutFormError({key: 'passwordError', value: ''}));
  };

  return (
    <React.Fragment>
      <Form.Row className='password-area'>
        <Form.Group as={Col} xs={12} sm={12} className='password-group' controlId={'billingAddressPassword'}>
          <Form.Label>Choose your password</Form.Label>
          <InputGroup className='password-append'>
            <Form.Control
              value={checkoutForm.password}
              required
              type={isPasswordVisible ? 'text' : 'password'}
              className='append-control'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text onClick={handleOnShowPassword}>
                <i className='eye-icon'>
                  {isPasswordVisible ? <Eye className='icon'/> : <EyeOff/>}
                </i>
              </InputGroup.Text>
            </InputGroup.Append>
            <Form.Control.Feedback
                type="invalid">
                Please type a strong password
              </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>    

      <Form.Row className='password-strength'>
        <PasswordStrength password={checkoutForm.password}/>
      </Form.Row>
      <Form.Row className='error-message pl-1'>
        {checkoutFormErrors.passwordError && checkoutFormErrors.passwordError}
      </Form.Row>
    </React.Fragment>
  )
}

export default BillingFormPwd
