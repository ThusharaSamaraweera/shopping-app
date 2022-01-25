import React from "react";
import {Col, Row, Navbar, Nav} from "react-bootstrap";
import {Twitter, Facebook, Instagram} from "react-feather";

const Footer: React.FC = () => {
  return (
    <Row className="footer">
      <Col>
        <Row className='footer-navigation py-2'>
          <Navbar>
            <Navbar.Collapse className="justify-content-center">
              <Nav className="navbar-center">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#ABOUT">ABOUT US</Nav.Link>
                <Nav.Link href="#FAQ">FAQ</Nav.Link>
                <Nav.Link href="#PRICING">PRICING</Nav.Link>
                <Nav.Link href="#CONTACT">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row xs={12} className='footer-details text-center py-3'>
          <Col lg={{span: 4, offset: 4}} md={{span: 8, offset: 2}} xs={{span: 12}}>
            <Col xs={12}>React Base - Free Industrial Training</Col>
            <Col xs={12}>Sri Lanka</Col>
            <Col xs={12}>+94 585 858 585</Col>
            <Col xs={12}>+94 858 525 252</Col>
            <Col xs={12}>Copyright © 2020</Col>
            <Col xs={12} className='py-3'>
              <div className='social'>
                <i><a href="www.facebook.com"> <Facebook size='1.3em'/></a></i>
                <i><a href="www.twitter.com"><Twitter size='1.3em'/></a></i>
                <i><a href="www.instagram.com"><Instagram size='1.3em'/></a></i>
              </div>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>

  );
}

export default Footer;