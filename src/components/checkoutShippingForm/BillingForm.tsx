import React from 'react'
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { changeCheckoutBillingForm, changeCheckoutBillingFormError } from '../../state/actions/checkoutFormActions'

import { AppState } from '../../state/reducers'
import { CountrySelect } from '../../types/checkoutAreaTypes'
import { countries, customStyles } from '../constants/checkoutAreaContants'
import BillingFormPwd from '../common/password/BillingFormPwd'
import { validateEmail, validateOnlyLetters, validateOnlyNumbers, validateOnlyNumbersAndLetters } from '../../utils/inputValidations'
import { countryCode } from '../common/countryCode'

const BillingForm: React.FC = () => {
  const checkoutForm = useSelector((state: AppState) => state.checkoutForm);
  const checkoutFormErrors = useSelector( (state: AppState) => state.checkoutFormError);

  const dispatch = useDispatch();

  const handleOnFullNameChanged = (fullName: string) => {
    dispatch(changeCheckoutBillingForm({key: 'fullName' , value: fullName}));
    if(!validateOnlyLetters(fullName)){
      dispatch(changeCheckoutBillingFormError({key: 'fullNameError', value: 'Enter valid full name'}));
      return;
    }
    dispatch(changeCheckoutBillingFormError({key: 'fullNameError', value: ''}));
  }

  const handleOnAddressChanged = (address: string) => {
    dispatch(changeCheckoutBillingForm({key: 'address', value: address}));
    if(!validateOnlyNumbersAndLetters(address)){
      dispatch(changeCheckoutBillingFormError({key: 'addressError', value: 'Enter valid address'}));
      return;
    }
    dispatch(changeCheckoutBillingFormError({key: 'addressError', value: ''}));
  }

  const handleOnCityChanged = (city: string) => {
    dispatch(changeCheckoutBillingForm({key: 'city', value: city}));
    if(!validateOnlyLetters(city)){
      dispatch(changeCheckoutBillingFormError({key: 'cityError', value: 'Enter valid city'}));
      return;
    }
    dispatch(changeCheckoutBillingFormError({key: 'cityError', value: ''}));
  }

  const handleOnPostalCodeChanged = (postelCode: string) => {
    dispatch(changeCheckoutBillingForm({key: 'postalCode', value: postelCode}));
    if(!validateOnlyNumbers(postelCode)){
      dispatch(changeCheckoutBillingFormError({key: 'postalCodeError', value: 'Must contain only numbers'}))
      return;
    }
    dispatch(changeCheckoutBillingFormError({key: 'postalCodeError', value: ''}));
  }

  const getCountry = () => {
    return countryCode(checkoutForm.country)
  }

  const handleOnCountry = (country: CountrySelect | null) => {

    if (!country) {
      return;
    }
    dispatch(changeCheckoutBillingForm({ key: 'country' , value: country}))
  }

  const selectCountry: CountrySelect[] = countries.map(
    (country) => {
      return {value: country.value, label: country.label}
    }
  )

  const handleOnContactNumberChanged = (contctNumber: string) => {
    dispatch(changeCheckoutBillingForm({key: 'contactNumber', value: contctNumber}));
    if(!validateOnlyNumbers(contctNumber)){
      dispatch(changeCheckoutBillingFormError({key: 'contactNumberError', value: 'Must contain only numbers'}))
      return;
    }
    dispatch(changeCheckoutBillingFormError({key: 'contactNumberError', value: ''}));
  }

  const handleOnEmailChanged = (email: string) => {
    dispatch(changeCheckoutBillingForm({key: 'email', value: email}));
    if(!validateEmail(email)){
      dispatch(changeCheckoutBillingFormError({key: 'emailError', value: 'Enter valid email'}));
      return;
    }
      dispatch(changeCheckoutBillingFormError({key: 'emailError', value: ''}));
  }

  const handleOnRetypedEmailChanged = (retypedEmail: string) => {
    dispatch(changeCheckoutBillingForm({key: 'retypedEmail', value: retypedEmail}))
    if(checkoutForm.email !== retypedEmail && checkoutForm.email !== null){
      dispatch(changeCheckoutBillingFormError({key: 'retypedEmailError', value: 'Email and Retype Email should be equal'}))
      return;
    }
    dispatch(changeCheckoutBillingFormError({key: 'retypedEmailError', value: ''}))
  }

  return (
    <Col className='billing-form' xs={12} sm={12}>
      <Form>
        <Form.Group controlId="billingAddressFullName">
          <Form.Label>Full Name*</Form.Label>
          <Form.Control value={checkoutForm.fullName}
                        type="text"
                        placeholder="Your Full Name"
                        required
                        pattern="^[A-Za-z][A-Za-z\s]*$"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleOnFullNameChanged(event.target.value)}
          />
          <Row>
            <span className='error-message'>
              {checkoutFormErrors.fullNameError && checkoutFormErrors.fullNameError}
            </span>
          </Row>
        </Form.Group>

        
        <Form.Group controlId="billingAddressAddress">
          <Form.Label>Address*</Form.Label>
          <Form.Control placeholder="Street Address"
                        required
                        value={checkoutForm.address}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleOnAddressChanged(event.target.value)}
          />
          <Row>
            <span className='error-message'>
              {checkoutFormErrors.addressError && checkoutFormErrors.addressError}
            </span>
          </Row>
        </Form.Group>

        <Form.Row className="city-postal-country-input">
          <Form.Group as={Col} xs={12} sm={12} md={4} controlId="billingAddressCity" className="city-input">
            <Form.Label>City / suburb*</Form.Label>
            <Form.Control placeholder="City / suburb"
                          required
                          pattern="[A-Za-z\s]*$"
                          value={checkoutForm.city}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            handleOnCityChanged(event.target.value)
                          }

            />
            <Row>
              <span className='error-message'>
                {checkoutFormErrors.cityError && checkoutFormErrors.cityError}
              </span>
            </Row>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={12} md={4} controlId="formGridPostalCode" className="postal-code-input">
            <Form.Label>Postal Code*</Form.Label>
            <Form.Control placeholder="Postal Code"
                          required
                          pattern="[0-9]*$"
                          value={checkoutForm.postalCode}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            handleOnPostalCodeChanged(event.target.value)
                          }
            />
            <Row>
              <span className='error-message'>
                {checkoutFormErrors.postalCodeError && checkoutFormErrors.postalCodeError}
              </span>
            </Row>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={12} md={4} controlId="billingAddressCountry" className='select-country'>
            <Form.Label>Country</Form.Label>
            <Select options={selectCountry}
                    allowCreateWhileLoading
                    isClearable={false}
                    isSearchable={true}
                    theme={theme => ({
                      ...theme,
                      borderRadius: 0,
                      borderWidth: .5,
                      colors: {
                        ...theme.colors,
                        primary25: '#f5f5f5',
                        primary: '#456cd2',
                      },
                    })}
                    styles={customStyles}
                    onChange={(selected: CountrySelect | null) => {
                      handleOnCountry(selected)
                    }
                    }
                    defaultValue={checkoutForm.country}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row className='contact-number'>
          <Form.Group controlId="billingAddressContactNumber">
            <Form.Label>Contact Number*</Form.Label>
            <InputGroup className="mb-1">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  {getCountry()}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                type="tel"
                pattern="^\d{10}$"
                value={checkoutForm.contactNumber ? checkoutForm.contactNumber : ''}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleOnContactNumberChanged(event.target.value)}
              />
            </InputGroup>
            <Row>
                <span className='error-message'>
                  {checkoutFormErrors.contactNumberError && checkoutFormErrors.contactNumberError}
                </span>
            </Row>
          </Form.Group>
        </Form.Row>
        
        <Form.Row className='email-area'
        >
          <Form.Group as={Col} xs={12} sm={12} md={6} controlId="formGridEmail" className="email">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email"
                          placeholder="Email"
                          required
                          value={checkoutForm.email ? checkoutForm.email : ''}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            handleOnEmailChanged(event.target.value)}
            />
            <Row>
              <span className='error-message'>
                {checkoutFormErrors.emailError && checkoutFormErrors.emailError}
              </span>
            </Row>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={12} md={6} controlId="formGridRetypeEmail" className="retyped-email">
            <Form.Label>Retype Email*</Form.Label>
            <Form.Control type="email"
                          placeholder='retype email'
                          required
                          value={checkoutForm.retypedEmail}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            handleOnRetypedEmailChanged(event.target.value)}
            />
            <Row>
              <span className='error-message'>
                {checkoutFormErrors.retypedEmailError && checkoutFormErrors.retypedEmailError}
              </span>
            </Row>
          </Form.Group>
        </Form.Row>
        <BillingFormPwd/>
      </Form>
    </Col>
  )

}

export default BillingForm;
