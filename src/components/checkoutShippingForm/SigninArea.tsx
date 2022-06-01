import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SigninArea = () => {
  const history = useHistory();

  const handleOnClickSignin = () => {
    history.push("/login");
  };

  return (
    <React.Fragment>
      <Row className="sign-area">
        <Col xs={6} sm={6} md={7} className="signing-label">
          <label>Already have an account?</label>
        </Col>
        <Col xs={6} sm={6} md={5} className="signing-btn">
          <Button variant="success" onClick={handleOnClickSignin}>
            Sign in
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SigninArea;
