import React, { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import { calcStrength } from "../../utils/inputValidations";
import { Eye, EyeOff } from "react-feather";
import PasswordStrength from "../common/password/PasswordStrength";

type PasswordProps = {
  password: string;
  loading: boolean;
  handleOnPasswordChanged: (password: string) => void;
  strongPasswordError: string;
};

const Password: React.FC<PasswordProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { password, loading, handleOnPasswordChanged, strongPasswordError } = props;

  const handleOnShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordChange = (password: string) => {
    handleOnPasswordChanged(password);
  };

  return (
    <React.Fragment>
      <Form.Row className="password-area">
        <Form.Group
          as={Col}
          xs={12}
          sm={12}
          className="password-group"
          controlId={"billingAddressPassword"}
        >
          <Form.Label>Choose your password</Form.Label>
          <InputGroup className="password-append">
            <Form.Control
              disabled={loading}
              value={password}
              required
              type={isPasswordVisible ? "text" : "password"}
              className="append-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePasswordChange(e.target.value)
              }
              
            />
            <InputGroup.Append>
              <InputGroup.Text onClick={handleOnShowPassword}>
                <i className="eye-icon">
                  {isPasswordVisible ? <Eye className="icon" /> : <EyeOff />}
                </i>
              </InputGroup.Text>
            </InputGroup.Append>
            <Form.Control.Feedback type="invalid" className="error-message">
              Please type a strong password
            </Form.Control.Feedback>
            <Form.Control.Feedback className="error-message">
              {strongPasswordError}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <Form.Row className="password-strength">
        <PasswordStrength password={password} />
      </Form.Row>
    </React.Fragment>
  );
};

export default Password;
