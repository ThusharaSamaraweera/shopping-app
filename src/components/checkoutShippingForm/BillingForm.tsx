import React from 'react'
import { Col, Form, FormControl, InputGroup, Row, Image } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { changeCheckoutForm } from '../../state/actions/checkoutFormActions'

import { AppState } from '../../state/reducers'
import { CountrySelect } from '../../types/checkoutAreaTypes'
import { countries, customStyles } from '../constants/checkoutAreaContants'
import { Australia, India, Singapore, SriLanka, UnitedStatesofAmerica } from '../constants/countries'
import BillingFormPwd from '../common/password/BillingFormPwd'

const BillingForm: React.FC = () => {
  const checkoutForm = useSelector((state: AppState) => state.checkoutForm);
  const checkoutFormErrors = useSelector( (state: AppState) => state.checkoutFormError);

  const dispatch = useDispatch();

  const handleOnFullNameChanged = (fullName: string) => {
    dispatch(changeCheckoutForm({key: 'fullName' , value: fullName}))
  }

  const handleOnAddressChanged = (address: string) => {
    dispatch(changeCheckoutForm({key: 'address', value: address}))
  }

  const handleOnCityChanged = (city: string) => {
    dispatch(changeCheckoutForm({key: 'city', value: city}))
  }

  const handleOnPostalCodeChanged = (postelCode: string) => {
    dispatch(changeCheckoutForm({key: 'postalCode', value: postelCode}))
  }


  const handleOnCountry = (country: CountrySelect | null) => {
    if (!country) {
      return;
    }
    dispatch(changeCheckoutForm({ key: 'country' , value: country}))
  }

  const selectCountry: CountrySelect[] = countries.map(
    (country) => {
      return {value: country.value, label: country.label}
    }
  )

  const handleOnContactNumberChanged = (contctNumber: string) => {
    dispatch(changeCheckoutForm({key: 'contactNumber', value: contctNumber}))
  }

  const countryCode = () => {
    if (checkoutForm.country?.value === UnitedStatesofAmerica) {
      return <div><Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/us.svg"/><span
        className="country-code">+1</span></div>;
    } else if (checkoutForm.country?.value === Australia) {
      return <div><Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/as.svg"/><span
        className="country-code">+61</span></div>;
    } else if (checkoutForm.country?.value === SriLanka) {
      return <div><Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/lk.svg"/><span
        className="country-code">+94</span></div>;
    } else if (checkoutForm.country?.value === Singapore) {
      return <div><Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/sg.svg"/><span
        className="country-code">+65</span></div>;
    } else if (checkoutForm.country?.value === India) {
      return <div><Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/in.svg"/><span
        className="country-code">+91</span></div>;
    }
  }

  const handleOnEmailChanged = (email: string) => {
    dispatch(changeCheckoutForm({key: 'email', value: email}))
  }

  const handleOnRetypedEmailChanged = (retypedEmail: string) => {
    dispatch(changeCheckoutForm({key: 'retypedEmail', value: retypedEmail}))
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
                  {countryCode()}
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

export default BillingForm
