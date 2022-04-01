import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../state/reducers";
import { Toast } from "../common/SweetAlerts";
import { useDispatch } from "react-redux";

import BillingForm from "./BillingForm";
import ChangeShippingOption from "./ChangeShippingOption";
import DeliveryInstructions from "./DeliveryInstructions";
import PaymentMethod from "./PaymentMethod";
import SigninArea from "./SigninArea";
import {
  changeCheckoutBillingFormError,
  changeCheckoutShippingFormError,
} from "../../state/actions/checkoutFormActions";
import ChangeShippingForm from "./ChangeShippingForm";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: AppState) => state.cartProducts.cartProducts
  );
  const checkoutBillingForm = useSelector(
    (state: AppState) => state.checkoutBillingForm
  );
  const checkoutBillingFormErrror = useSelector(
    (state: AppState) => state.checkoutBillingFormError
  );
  const checkoutShippingForm = useSelector(
    (state: AppState) => state.checkoutchangedShippingForm
  );
  const checkoutShippingFormError = useSelector(
    (state: AppState) => state.checkoutchangedShippingFormError
  );

  const validtateBillingForm = () => {
    let isBillingFormFilled: boolean = true;
    if (!checkoutBillingForm.fullName) {
      dispatch(
        changeCheckoutBillingFormError({
          key: "fullNameError",
          value: "Required",
        })
      );
      isBillingFormFilled = false;
    }

    if (!checkoutBillingForm.address) {
      dispatch(
        changeCheckoutBillingFormError({
          key: "addressError",
          value: "Required",
        })
      );
      isBillingFormFilled = false;
    }

    if (!checkoutBillingForm.city) {
      dispatch(
        changeCheckoutBillingFormError({ key: "cityError", value: "Required" })
      );
      isBillingFormFilled = false;
    }

    if (!checkoutBillingForm.postalCode) {
      dispatch(
        changeCheckoutBillingFormError({
          key: "postalCodeError",
          value: "Required",
        })
      );
      isBillingFormFilled = false;
    }

    if (!checkoutBillingForm.contactNumber) {
      dispatch(
        changeCheckoutBillingFormError({
          key: "contactNumberError",
          value: "Required",
        })
      );
      isBillingFormFilled = false;
    }

    if (!checkoutBillingForm.email) {
      dispatch(
        changeCheckoutBillingFormError({ key: "emailError", value: "Required" })
      );
      isBillingFormFilled = false;
    }

    if (!checkoutBillingForm.retypedEmail) {
      dispatch(
        changeCheckoutBillingFormError({
          key: "retypedEmailError",
          value: "Required",
        })
      );
      isBillingFormFilled = false;
    }

    if (!checkoutBillingForm.password) {
      dispatch(
        changeCheckoutBillingFormError({
          key: "passwordError",
          value: "Required",
        })
      );
      isBillingFormFilled = false;
    }

    const isFormValid =
      isBillingFormFilled &&
      !(
        checkoutBillingFormErrror.fullNameError ||
        checkoutBillingFormErrror.addressError ||
        checkoutBillingFormErrror.cityError ||
        checkoutBillingFormErrror.postalCodeError ||
        checkoutBillingFormErrror.contactNumberError ||
        checkoutBillingFormErrror.emailError ||
        checkoutBillingFormErrror.retypedEmailError
      );

    return isFormValid;
  };

  const validateShippingForm = () => {
    let isShippingFormFilled = true;
    if (!checkoutShippingForm.fullName) {
      dispatch(
        changeCheckoutShippingFormError({
          key: "fullNameError",
          value: "Required",
        })
      );
      isShippingFormFilled = false;
    }
    if (!checkoutShippingForm.address) {
      dispatch(
        changeCheckoutShippingFormError({
          key: "addressError",
          value: "Required",
        })
      );
      isShippingFormFilled = false;
    }

    if (!checkoutShippingForm.city) {
      dispatch(
        changeCheckoutShippingFormError({ key: "cityError", value: "Required" })
      );
      isShippingFormFilled = false;
    }

    if (!checkoutShippingForm.postalCode) {
      dispatch(
        changeCheckoutShippingFormError({
          key: "postalCodeError",
          value: "Required",
        })
      );
      isShippingFormFilled = false;
    }

    if (!checkoutShippingForm.contactNumber) {
      dispatch(
        changeCheckoutShippingFormError({
          key: "contactNumberError",
          value: "Required",
        })
      );
      isShippingFormFilled = false;
    }

    const isChangeShippingFormValid =
      isShippingFormFilled &&
      !(
        checkoutShippingFormError.fullNameError ||
        checkoutShippingFormError.addressError ||
        checkoutShippingFormError.cityError ||
        checkoutShippingFormError.postalCodeError ||
        checkoutShippingFormError.contactNumberError
      );

    return isChangeShippingFormValid;
  };

  const handleOnSubmit = () => {
    if (productList.length === 0) {
      Toast("Add products to the Cart", "", "info");
      return;
    }

    // check whether billing form is valid 
    if (
      !validtateBillingForm()
    ) {
      return;
    }

    // check whether shipping form is valid when change shipping form is opened
    if (
      checkoutBillingForm.isChangeShippingAddressVisible &&
      !validateShippingForm() 
    ) {
      return;
    }

  };

  return (
    <Container>
      <Row className="shopping-form-area">
        <Col
          className="shopping-form-area-div p-0"
          xs={12}
          sm={12}
          md={12}
          lg={{ span: 7, offset: 5 }}
        >
          <SigninArea />

          <Row className="billing-address">
            <Col className="billing-address-header">
              <h5>Shipping and Billing Address</h5>
            </Col>
            <BillingForm />
          </Row>
          <ChangeShippingOption />
          {checkoutBillingForm.isChangeShippingAddressVisible && (
            <div className="change-shipping-form">
              <ChangeShippingForm />
            </div>
          )}
          <DeliveryInstructions />
          <PaymentMethod />
          <Row className="order-btn justify-content-center">
            <Button type="submit" onClick={handleOnSubmit}>
              Order
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
