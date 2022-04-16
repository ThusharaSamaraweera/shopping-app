import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const SigninArea = () => {
  return (
    <React.Fragment>
      <Row className='sign-area'>
        <Col xs={6} sm={6} md={7} className='signing-label'>
            <label>Already have an account?</label>
        </Col>
        <Col xs={6} sm={6} md={5} className='signing-btn'>
            <Button variant="success">Sign in</Button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default SigninArea
