import React, { useState } from 'react'
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import Select from 'react-select';

import { CountrySelect } from '../../types/checkoutAreaTypes';
import { countries, customStyles } from '../constants/checkoutAreaContants'
import { countryCode } from '../common/countryCode'

const RegisterForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [country, setCountry] = useState<CountrySelect>({value: 'Sri Lanka', label: 'Sri Lanka'})
  const [contactNumber, setContactNumber] = useState<string>('')

  const handleOnNameChanged = (inputName: string) => {
    setName(inputName)
  }

  const handleOnAddressChanged = (inputAddress: string) => {
    setAddress(inputAddress)
  }

  const handleOnCityChanged = (inputCity: string) => {
    setCity(inputCity)
  }

  const handleOnPostalCodeChanged = (inputPostalCode: string) => {
    setPostalCode(inputPostalCode)
  }

  const selectCountry: CountrySelect[] = countries.map(
    (country) => {
      return {value: country.value, label: country.label}
    }
  )

  const handleOnCountryChanged = (inputCountry: CountrySelect | null) => {
    if(!inputCountry){
      return;
    }
    setCountry(inputCountry)
  }

  const getCountry = () => {
    return countryCode(country)
  }

  const handleOnContactNumberChanged = (inputContactNumber: string) => [
    setContactNumber(inputContactNumber)
  ]

  return (
    <Col className='billing-form ml-2 ml-sm-0' xs={11} sm={11} md={6}>
      <Form.Group controlId="billingAddressFullName">
        <Form.Label>Full Name*</Form.Label>
        <Form.Control value={name}
                      type="text"
                      placeholder="Your Full Name"
                      required
                      pattern="^[A-Za-z][A-Za-z\s]*$"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleOnNameChanged(event.target.value)}
        />
        <Form.Control.Feedback type="invalid" className='error-message'>
          Please provide your full name
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formGridAddress">
        <Form.Label>Address*</Form.Label>
        <Form.Control placeholder="Street Address"
                      required
                      disabled={loading}
                      value={address ? address : ''}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleOnAddressChanged(event.target.value)}
        />
        <Form.Control.Feedback type="invalid" className='error-message'>
          Please provide your address
        </Form.Control.Feedback>
      </Form.Group>

        <Form.Row className="city-postal-country-input">
          <Form.Group as={Col} xs={12} sm={12} md={4} controlId="billingAddressCity" className="city-input">
            <Form.Label>City / suburb*</Form.Label>
            <Form.Control placeholder="City / suburb"
                          required
                          pattern="[A-Za-z\s]*$"
                          value={city}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            handleOnCityChanged(event.target.value)
                          }

            />
            <Form.Control.Feedback type="invalid">
              Please provide city / suburb
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={12} md={4} controlId="formGridPostalCode" className="postal-code-input">
            <Form.Label>Postal Code*</Form.Label>
            <Form.Control placeholder="Postal Code"
                          required
                          pattern="[0-9]*$"
                          value={postalCode}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            handleOnPostalCodeChanged(event.target.value)
                          }
            />
            <Form.Control.Feedback type="invalid">
              Please provide post code
            </Form.Control.Feedback>
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
                      handleOnCountryChanged(selected)
                    }
                    }
                    defaultValue={country}
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
                value={contactNumber}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleOnContactNumberChanged(event.target.value)}
              />
            </InputGroup>
            <Form.Control.Feedback type="invalid"  className='error-message'>
                Please provide your phone number
              </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
    </Col>
  )
}

export default RegisterForm
