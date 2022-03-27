import React from "react";
import { Row, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeCheckoutShippingForm } from "../../state/actions/checkoutFormActions";
import { AppState } from "../../state/reducers";

const ChangeShippingForm: React.FC = () => {
  const changedShippingForm = useSelector(
    (state: AppState) => state.checkoutchangedShippingForm
  );
  const changedShippingFormError = useSelector(
    (state: AppState) => state.checkoutchangedShippingFormError
  );
  const disptach = useDispatch();

  const handleOnChangeName = (fullName: string) => {
    disptach(changeCheckoutShippingForm({ key: "fullName", value: fullName }));
  };

  const handleOnChangeShippingAddress = (address: string) => {
    disptach(changeCheckoutShippingForm({ key: "address", value: address }));
  };

  return (
    <Row className="billing-form">
      <Form>
        <Form.Group controlId="changedShippingFullName">
          <Form.Label>Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            required
            pattern="^[A-Za-z][A-Za-z\s]*$"
            value={changedShippingForm.fullName}
            onChange={(event) => {
              handleOnChangeName(event.target.value);
            }}
          />
          <Row>
            <span className="error-message">
              {changedShippingFormError.fullNameError &&
                changedShippingFormError.fullNameError}
            </span>
          </Row>
        </Form.Group>

        <Form.Group controlId="changedShippingFullName">
          <Form.Label>Shipping Address*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            required
            pattern="^[A-Za-z][A-Za-z\s][0-9]*$"
            value={changedShippingForm.address}
            onChange={(event) => {
              handleOnChangeShippingAddress(event.target.value);
            }}
          />
          <Row>
            <span className="error-message">
              {changedShippingFormError.fullNameError &&
                changedShippingFormError.fullNameError}
            </span>
          </Row>
        </Form.Group>
      </Form>
    </Row>
  );
};

export default ChangeShippingForm;
