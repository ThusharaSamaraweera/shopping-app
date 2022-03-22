import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AppState } from '../../state/reducers'
import { Toast } from '../common/SweetAlerts'
import { useDispatch } from 'react-redux'

import BillingForm from './BillingForm'
import ChangeShippingAddress from './ChangeShippingAddress'
import DeliveryInstructions from './DeliveryInstructions'
import PaymentMethod from './PaymentMethod'
import SigninArea from './SigninArea'
import { changeCheckoutFormError } from '../../state/actions/checkoutFormActions'

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: AppState) => state.cartProducts.cartProducts);
  const checkoutForm = useSelector((state: AppState) => state.checkoutForm);
  const checkoutFormErrors = useSelector( (state: AppState) => state.checkoutFormError);

  const validtateBillingForm = () => {
    let isBillingFormFilled: boolean = true;
    if(!checkoutForm.fullName){
      dispatch(changeCheckoutFormError({key: 'fullNameError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.address){
      dispatch(changeCheckoutFormError({key: 'addressError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.city){
      dispatch(changeCheckoutFormError({key: 'cityError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.postalCode){
      dispatch(changeCheckoutFormError({key: 'postalCodeError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.contactNumber){
      dispatch(changeCheckoutFormError({key: 'contactNumberError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.email){
      dispatch(changeCheckoutFormError({key: 'emailError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.retypedEmail){
      dispatch(changeCheckoutFormError({key: 'retypedEmailError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.password){
      dispatch(changeCheckoutFormError({key: 'passwordError', value: 'Required'}));
      isBillingFormFilled = false;
    }
  }

  const handleOnSubmit = () => {
   if(productList.length === 0) {
     Toast('Add products to the Cart', '', 'info')
   }

   validtateBillingForm()
  }

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
          <Row className="order-btn justify-content-center">
            <Button type="submit" onClick={handleOnSubmit}>Order
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Index
