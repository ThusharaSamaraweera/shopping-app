import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../Footer";
import MainMiddleNavBar from "../NavBars/MiddleNavBar";
import TopNavBar from "../NavBars/TopNavBar";
import RegisterImage from '../../asserts/images/registerCart.png'

const Register:React.FC = () => {

  return (
    <Container fluid={true}>
      <TopNavBar/>
      <MainMiddleNavBar/>
      <Row className="register">
        <Col xs={12} sm={12} md={5} className='img-col d-flex justify-content-center'>
          <Image className="img mt-4"
                  src={RegisterImage}
                  alt="register cart"
          />
        </Col>
        <Col>
        
        </Col>
      </Row>
      <Footer/>
    </Container>
  )
}

export default Register;