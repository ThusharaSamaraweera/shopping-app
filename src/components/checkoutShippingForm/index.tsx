import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { AppState } from "../../state/reducers";
import { Toast } from "../common/SweetAlerts";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import moment from "moment";

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
import GuestComponent from "../common/authGuards/GeustComponent";
import { SIGNUP_CUSTOMER } from "../../graphQL/auth/authMutations";
import { setAuthUser } from "../../state/actions/authActions";
import { PLACE_ORDER } from "../../graphQL/order/orderMutation";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const [signup] = useMutation(SIGNUP_CUSTOMER);
  const [placeOrder] = useMutation(PLACE_ORDER);
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

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

  const authUser = useSelector((state: AppState) => state.authUser.authUser);
  // @ts-ignore
  const [customerId, setCustomerId] = useState<string>(authUser?.login?.id);

  const validateBillingForm = () => {
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

  const signup_customer = async () => {
    return await signup({
      variables: {
        newUser: {
          name: checkoutBillingForm.fullName,
          address: checkoutBillingForm.address,
          city: checkoutBillingForm.city,
          postalCode: checkoutBillingForm.postalCode,
          phoneNumber: checkoutBillingForm.contactNumber,
          email: checkoutBillingForm.email,
          password: checkoutBillingForm.password,
          country: checkoutBillingForm.country.value,
          userType: "user",
        },
      },
    });
  };

  const addOrder = async (orderCode: string, requestedUserId: string) => {
    return await placeOrder({
      variables: {
        newOrder: {
          orderCode: orderCode,
          requestedUser: requestedUserId,
          changeShippingAddress:
            checkoutBillingForm.isChangeShippingAddressVisible,
          shippingDetails: {
            fullName: checkoutShippingForm.fullName,
            address: checkoutShippingForm.address,
            city: checkoutShippingForm.city,
            postalCode: checkoutShippingForm.postalCode,
            country: checkoutShippingForm.country.value,
            contactNumber: checkoutShippingForm.contactNumber,
          },
          productList: productList,
          deliveryInstructions: checkoutBillingForm.deliveryInstructions,
          status: "requested",
          paymentType: checkoutBillingForm.paymentMethod,
          paymentStatus: false,
          requestedDate: moment().format(),
        },
      },
    });
  };

  const handleOnSubmit = async () => {
    if (productList.length === 0) {
      Toast("Add products to the Cart", "", "info");
      return;
    }

    // check whether billing form is valid
    if (Object.keys(authUser).length === 0 && !validateBillingForm()) {
      return;
    }

    // check whether shipping form is valid when change shipping form is opened
    if (
      checkoutBillingForm.isChangeShippingAddressVisible &&
      !validateShippingForm()
    ) {
      return;
    }

    setLoading(true);
    let tempCustomerId = customerId;

    if (Object.keys(authUser).length === 0) {
      await signup_customer()
        .then(async ({ data }) => {
          if (data) {
            // @ts-ignore
            setCustomerId(data.id);
            tempCustomerId = data.addUser.id;
            dispatch(setAuthUser(data));
          }
        })
        .catch((err) => {
          console.log(err);
          Toast("User signup failed", "", "error");
        });
    }
    await addOrder(getOrderCode(), tempCustomerId)
      .then((data) => {
        Toast("Order placed successfully", "", "success");
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false)
  };

  const getOrderCode = () => {
    const date: string = moment().format('YYYYMMDD');
    const randomString: string = String(Math.floor(Math.random() * 9999));
    return date + "ODR" + randomString;
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
          <GuestComponent>
            <SigninArea />

            <Row className="billing-address">
              <Col className="billing-address-header">
                <h5>Shipping and Billing Address</h5>
              </Col>
              <BillingForm />
            </Row>
          </GuestComponent>

          <ChangeShippingOption />
          {checkoutBillingForm.isChangeShippingAddressVisible && (
            <div className="change-shipping-form">
              <ChangeShippingForm />
            </div>
          )}
          <DeliveryInstructions />
          <PaymentMethod />
          <Row className="justify-content-center">
            <Button
              htmlType="submit"
              onClick={handleOnSubmit}
              disabled={loading}
              loading={loading}
              className="order-btn"
            >
              Order
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
