import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Select from "react-select";
import { useHistory } from "react-router-dom";

import { CountrySelect } from "../../../types/checkoutAreaTypes";
import { countries, customStyles } from "../../constants/checkoutAreaContants";
import { countryCode } from "../../common/countryCode";
import Password from "./Password";
import { calcStrength } from "../../../utils/inputValidations";
import { useMutation } from "@apollo/client";
import { SIGNUP_CUSTOMER } from "../../../graphQL/auth/authMutations";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../../state/actions/authActions";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [country, setCountry] = useState<CountrySelect>({
    value: "Sri Lanka",
    label: "Sri Lanka",
  });
  const [contactNumber, setContactNumber] = useState<string>("");
  const [email, setEamil] = useState<string>("");
  const [retypeEmail, setRetypeEmail] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [strongPasswordError, setStrongPasswordError] = useState<string>("");
  const [retypedEmailError, setRetypedEmailError] = useState<string>("");
  const [signup] = useMutation(SIGNUP_CUSTOMER);

  const handleOnNameChanged = (inputName: string) => {
    setName(inputName);
  };

  const handleOnAddressChanged = (inputAddress: string) => {
    setAddress(inputAddress);
  };

  const handleOnCityChanged = (inputCity: string) => {
    setCity(inputCity);
  };

  const handleOnPostalCodeChanged = (inputPostalCode: string) => {
    setPostalCode(inputPostalCode);
  };

  const selectCountry: CountrySelect[] = countries.map((country) => {
    return { value: country.value, label: country.label };
  });

  const handleOnCountryChanged = (inputCountry: CountrySelect | null) => {
    if (!inputCountry) {
      return;
    }
    setCountry(inputCountry);
  };

  const getCountry = () => {
    return countryCode(country);
  };

  const handleOnContactNumberChanged = (inputContactNumber: string) => {
    setContactNumber(inputContactNumber);
  };

  const handleOnEmailChanged = (inputEmail: string) => {
    setEamil(inputEmail);
  };

  const handleOnRetypedEmailChanged = (inputRetypeEmail: string) => {
    setRetypeEmail(inputRetypeEmail);
    if (email !== inputRetypeEmail && email !== null) {
      setRetypedEmailError("Eamil and Re-type email must be same");
      return;
    }
    setRetypedEmailError("");
  };

  useEffect(() => {
    handleOnRetypedEmailChanged(retypeEmail);
  }, [email]);

  const signup_customer = async () => {
    return await signup({
      variables: {
        newUser: {
          name: name,
          address: address,
          city: city,
          postalCode: postalCode,
          phoneNumber: contactNumber,
          email: email,
          password: password,
          country: country.value,
          userType: "user",
        },
      },
    });
  };

  

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(false);
    signup_customer()
      .then(async ({ data }) => {
        if (data) {
          console.log(data);
          dispatch(setAuthUser(data));
          history.push('/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnPasswordChanged = (inputPassword: string) => {
    setPassword(inputPassword);
    if (calcStrength(inputPassword) <= 4) {
      setStrongPasswordError("Please use strong password");
      return;
    }
    setStrongPasswordError("");
  };

  return (
    <Col
      className="billing-form ml-2 ml-sm-0 mt-5"
      xs={11}
      sm={11}
      md={8}
      lg={6}
    >
      <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
        <Form.Group controlId="billingAddressFullName">
          <Form.Label>Full Name*</Form.Label>
          <Form.Control
            value={name}
            type="text"
            placeholder="Your Full Name"
            required
            pattern="^[A-Za-z][A-Za-z\s]*$"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleOnNameChanged(event.target.value)
            }
          />
          <Form.Control.Feedback type="invalid" className="error-message">
            Please provide your full name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGridAddress">
          <Form.Label>Address*</Form.Label>
          <Form.Control
            placeholder="Street Address"
            required
            disabled={loading}
            value={address ? address : ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleOnAddressChanged(event.target.value)
            }
          />
          <Form.Control.Feedback type="invalid" className="error-message">
            Please provide your address
          </Form.Control.Feedback>
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
              value={city}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleOnCityChanged(event.target.value)
              }
            />
            <Form.Control.Feedback type="invalid" className="error-message">
              Please provide city / suburb
            </Form.Control.Feedback>
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
              value={postalCode}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleOnPostalCodeChanged(event.target.value)
              }
            />
            <Form.Control.Feedback type="invalid" className="error-message">
              Please provide post code
            </Form.Control.Feedback>
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
                handleOnCountryChanged(selected);
              }}
              defaultValue={country}
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
                pattern="^\d+$"
                value={contactNumber}
                maxLength={9}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleOnContactNumberChanged(event.target.value)
                }
              />
              <Form.Control.Feedback type="invalid" className="error-message">
                Please provide your phone number
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Row className="email-area">
          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md={6}
            controlId="formGridEmail"
            className="email"
          >
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleOnEmailChanged(event.target.value)
              }
            />
            <Form.Control.Feedback type="invalid" className="error-message">
              Please provide your correct email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            xs={12}
            sm={12}
            md={6}
            controlId="formGridRetypeEmail"
            className="retyped-email"
          >
            <Form.Label>Retype Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="retype email"
              required
              value={retypeEmail}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleOnRetypedEmailChanged(event.target.value)
              }
            />
            <Form.Control.Feedback type="invalid" className="error-message">
              Please provide your correct email
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid" className="error-message">
              {retypedEmailError}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Password
          password={password}
          loading={false}
          handleOnPasswordChanged={handleOnPasswordChanged}
          strongPasswordError={strongPasswordError}
        />

        <Row className="signup-btn justify-content-center">
          <Button type="submit">Register</Button>
        </Row>
      </Form>
    </Col>
  );
};

export default RegisterForm;
