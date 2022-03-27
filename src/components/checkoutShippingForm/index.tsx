import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AppState } from '../../state/reducers'
import { Toast } from '../common/SweetAlerts'
import { useDispatch } from 'react-redux'

import BillingForm from './BillingForm'
import ChangeShippingOption from './ChangeShippingOption'
import DeliveryInstructions from './DeliveryInstructions'
import PaymentMethod from './PaymentMethod'
import SigninArea from './SigninArea'
import { changeCheckoutBillingFormError } from '../../state/actions/checkoutFormActions'
import ChangeShippingForm from './ChangeShippingForm'

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: AppState) => state.cartProducts.cartProducts);
  const checkoutForm = useSelector((state: AppState) => state.checkoutForm);
  const isChangeShippingFormVisible = useSelector((state: AppState) => state.checkoutForm.isChangeShippingAddressVisible)

  const validtateBillingForm = () => {
    let isBillingFormFilled: boolean = true;
    if(!checkoutForm.fullName){
      dispatch(changeCheckoutBillingFormError({key: 'fullNameError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.address){
      dispatch(changeCheckoutBillingFormError({key: 'addressError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.city){
      dispatch(changeCheckoutBillingFormError({key: 'cityError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.postalCode){
      dispatch(changeCheckoutBillingFormError({key: 'postalCodeError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.contactNumber){
      dispatch(changeCheckoutBillingFormError({key: 'contactNumberError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.email){
      dispatch(changeCheckoutBillingFormError({key: 'emailError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.retypedEmail){
      dispatch(changeCheckoutBillingFormError({key: 'retypedEmailError', value: 'Required'}));
      isBillingFormFilled = false;
    }

    if(!checkoutForm.password){
      dispatch(changeCheckoutBillingFormError({key: 'passwordError', value: 'Required'}));
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
          <ChangeShippingOption />
          {isChangeShippingFormVisible && 
            <div className='change-shipping-form'>
              <ChangeShippingForm />
            </div>  
          }
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
