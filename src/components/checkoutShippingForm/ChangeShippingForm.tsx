import React from "react";
import { Row, Form, Col, InputGroup, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import {
  changeCheckoutShippingForm,
  changeCheckoutShippingFormError,
} from "../../state/actions/checkoutFormActions";
import { AppState } from "../../state/reducers";
import { CountrySelect } from "../../types/checkoutAreaTypes";
import {
  validateAddress,
  validateOnlyLetters,
  validateOnlyNumbers,
} from "../../utils/inputValidations";
import { countryCode } from "../common/countryCode";
import { countries, customStyles } from "../constants/checkoutAreaContants";

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
    if (!validateOnlyLetters(fullName)) {
      disptach(
        changeCheckoutShippingFormError({
          key: "fullNameError",
          value: "Only can contain letter",
        })
      );
      return;
    }
    disptach(
      changeCheckoutShippingFormError({ key: "fullNameError", value: "" })
    );
  };

  const handleOnChangeShippingAddress = (address: string) => {
    disptach(changeCheckoutShippingForm({ key: "address", value: address }));
    if (!validateAddress(address)) {
      disptach(
        changeCheckoutShippingFormError({
          key: "addressError",
          value: "Only can contain letter and numbers",
        })
      );
      return;
    }
    disptach(
      changeCheckoutShippingFormError({ key: "addressError", value: "" })
    );
  };

  const handleOnCityChanged = (city: string) => {
    disptach(changeCheckoutShippingForm({ key: "city", value: city }));
    if (!validateOnlyLetters(city)) {
      disptach(
        changeCheckoutShippingFormError({
          key: "cityError",
          value: "Only can contain letter",
        })
      );
      return;
    }
    disptach(changeCheckoutShippingFormError({ key: "cityError", value: "" }));
  };

  const handleOnPostalCodeChanged = (postalCode: string) => {
    disptach(
      changeCheckoutShippingForm({ key: "postalCode", value: postalCode })
    );
    if (!validateOnlyNumbers(postalCode)) {
      disptach(
        changeCheckoutShippingFormError({
          key: "postalCodeError",
          value: "Only can contain numbers",
        })
      );
      return;
    }
    disptach(changeCheckoutShippingFormError({ key: "postalCodeError", value: "" }));
  };

  const selectCountry: CountrySelect[] = countries.map((country) => {
    return { value: country.value, label: country.label };
  });

  const handleOnCountry = (country: CountrySelect | null) => {
    if (!country) {
      return;
    }
    disptach(changeCheckoutShippingForm({ key: "country", value: country }));
  };

  const handleOnContactNumberChanged = (contactNumber: string) => {
    disptach(
      changeCheckoutShippingForm({ key: "contactNumber", value: contactNumber })
    );
    if (!validateOnlyNumbers(contactNumber)) {
      disptach(
        changeCheckoutShippingFormError({
          key: "contactNumberError",
          value: "Only can contain numbers",
        })
      );
      return;
    }
    disptach(changeCheckoutShippingFormError({ key: "contactNumberError", value: "" }));
  };

  const getCountry = () => {
    return countryCode(changedShippingForm.country);
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
              {changedShippingFormError.addressError &&
                changedShippingFormError.addressError}
            </span>
          </Row>
        </Form.Group>

        <Form.Row className="city-postal-country-input">
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md={4}
            controlId="billingAddressCity"
            className="city-input"
          >
            <Form.Label>City / suburb*</Form.Label>
            <Form.Control
              placeholder="City / suburb"
              required
              pattern="[A-Za-z\s]*$"
              value={changedShippingForm.city}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleOnCityChanged(event.target.value)
              }
            />
            <Row>
              <span className="error-message">
                {changedShippingFormError.cityError &&
                  changedShippingFormError.cityError}
              </span>
            </Row>
          </Form.Group>

          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md={4}
            controlId="formGridPostalCode"
            className="postal-code-input"
          >
            <Form.Label>Postal Code*</Form.Label>
            <Form.Control
              placeholder="Postal Code"
              required
              pattern="[0-9]*$"
              value={changedShippingForm.postalCode}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleOnPostalCodeChanged(event.target.value)
              }
            />
            <Row>
              <span className="error-message">
                {changedShippingFormError.postalCodeError &&
                  changedShippingFormError.postalCodeError}
              </span>
            </Row>
          </Form.Group>

          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md={4}
            controlId="billingAddressCountry"
            className="select-country"
          >
            <Form.Label>Country</Form.Label>
            <Select
              options={selectCountry}
              allowCreateWhileLoading
              isClearable={false}
              isSearchable={true}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                borderWidth: 0.5,
                colors: {
                  ...theme.colors,
                  primary25: "#f5f5f5",
                  primary: "#456cd2",
                },
              })}
              styles={customStyles}
              onChange={(selected: CountrySelect | null) => {
                handleOnCountry(selected);
              }}
              defaultValue={changedShippingForm.country}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row className="contact-number">
          <Form.Group controlId="billingAddressContactNumber">
            <Form.Label>Contact Number*</Form.Label>
            <InputGroup className="mb-1">
              <InputGroup.Prepend>
                <InputGroup.Text>{getCountry()}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                type="tel"
                pattern="^\d{10}$"
                value={
                  changedShippingForm.contactNumber
                    ? changedShippingForm.contactNumber
                    : ""
                }
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleOnContactNumberChanged(event.target.value)
                }
              />
            </InputGroup>
            <Row>
              <span className="error-message">
                {changedShippingFormError.contactNumberError &&
                  changedShippingFormError.contactNumberError}
              </span>
            </Row>
          </Form.Group>
        </Form.Row>
      </Form>
    </Row>
  );
};

export default ChangeShippingForm;
