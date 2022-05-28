import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Eye, EyeOff } from "react-feather";
import Footer from "../../Footer";
import MainMiddleNavBar from "../../NavBars/MiddleNavBar";
import TopNavBar from "../../NavBars/TopNavBar";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("")
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false)

  const handleOnEmailChanged = (inputEmail: string) => {
    setEmail(inputEmail);
  };

  const handleOnLogin = () => {};

  const togglePasswordVisible = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  const handlePasswordChange = (inputPassword: string) => {
    setPassword(inputPassword)
  }

  return (
    <Container fluid={true}>
      <TopNavBar />
      <MainMiddleNavBar />
      <Row className="justify-content-center align-item-center mx-1 mx-xs-2">
        <Col xs={12} sm={6} className="login-section p-2 p-sm-3 p-md-5">
          <Row className="mb-4">
            <h4 className="login-form-title">Log into your account</h4>
          </Row>
          <Form
            noValidate
            validated={validated}
            className="login-form"
            onSubmit={handleOnLogin}
          >
            <Form.Group controlId="billingAddressFullName">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="enter email"
                required
                pattern="^[A-Za-z][A-Za-z\s]*$"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleOnEmailChanged(event.target.value)
                }
              />
              <Form.Control.Feedback type="invalid" className="error-message">
                Please provide your full name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} xs={12} sm={12} className='password-group' controlId={'billingAddressPassword'}>
              <Form.Label>Password</Form.Label>
              <InputGroup className='password-append'>
                <Form.Control
                  value={password}
                  required
                  type={isPasswordVisible ? 'text' : 'password'}
                  className='append-control'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e.target.value)}
                />
                <InputGroup.Append>
                  <InputGroup.Text onClick={togglePasswordVisible}>
                    <i className='eye-icon'>
                      {isPasswordVisible ? <Eye className='icon'/> : <EyeOff/>}
                    </i>
                  </InputGroup.Text>
                </InputGroup.Append>
                <Form.Control.Feedback
                    type="invalid">
                    Please type a strong password
                  </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Row className="login-btn justify-content-center">
              <Button type="submit">Login</Button>
            </Row>
          </Form>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Login;
