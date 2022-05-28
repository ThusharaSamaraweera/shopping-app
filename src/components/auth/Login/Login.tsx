import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Eye, EyeOff } from "react-feather";
import { LOGIN } from "../../../graphQL/auth/authMutations";
import Footer from "../../Footer";
import MainMiddleNavBar from "../../NavBars/MiddleNavBar";
import TopNavBar from "../../NavBars/TopNavBar";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../../state/actions/authActions";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [login] = useMutation(LOGIN);
  const [isLoading, setLoading] = useState(false);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const handleOnEmailChanged = (inputEmail: string) => {
    setEmail(inputEmail);
  };

  const loginUser = async () => {
    return await login({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  const handleOnLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setLoading(true)
    console.log(email, password);
    loginUser().then(async ({ data }) => {
      if (data) {
        console.log(data)
        dispatch(setAuthUser(data));
        history.push("/");
      }
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    });
    setLoading(false)
  };

  const togglePasswordVisible = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordChange = (inputPassword: string) => {
    setPassword(inputPassword);
  };

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
            <Form.Group controlId="signupEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="enter email"
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleOnEmailChanged(event.target.value)
                }
              />
              <Form.Control.Feedback type="invalid" className="error-message">
                Please provide your email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              xs={12}
              sm={12}
              className="password-group"
              controlId={"signupPassword"}
            >
              <Form.Label>Password</Form.Label>
              <InputGroup className="password-append">
                <Form.Control
                  value={password}
                  required
                  type={isPasswordVisible ? "text" : "password"}
                  className="append-control"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handlePasswordChange(e.target.value)
                  }
                />
                <InputGroup.Append>
                  <InputGroup.Text onClick={togglePasswordVisible}>
                    <i className="eye-icon">
                      {isPasswordVisible ? (
                        <Eye className="icon" />
                      ) : (
                        <EyeOff />
                      )}
                    </i>
                  </InputGroup.Text>
                </InputGroup.Append>
                <Form.Control.Feedback type="invalid" className="error-message">
                  Please type a strong password
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Row className="login-btn justify-content-center">
              <Button type="submit" disabled={isLoading}>
                <Spin
                  indicator={antIcon}
                  spinning={isLoading}
                  style={{ color: `${ isLoading ? "white" : "#4caf50"}` }}
                  className='mr-3'
                />
                Login
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Login;
