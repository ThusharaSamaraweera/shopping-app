import React from "react";
import {Button, Nav, Navbar, Row} from "react-bootstrap";
import {Phone, User} from "react-feather";

const MainTopNavBar:React.FC = () => {
  return (
    <Row className='top-nav-col'>
      <Navbar expand="md">
        <i className='phone-icon'><Phone size='1.1em'/></i>
        <a href='#' className='number'>+94779 510 260</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Row className='delivery-area'>
              <i className="fas fa-truck fa-md"/>
              <a href="#delivery-area">Delivery Areas</a>
            </Row>
            <Row className='my-account'>
              <i><User size='1.1em'/></i>
              <a href="#my-account">My Account</a>
            </Row>
            <div className='register'>
              <Button variant="outline-success">Register</Button>
            </div>
            <Row className='login-row'>
              <a href='#login'>Login</a>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='divider'> </div>
    </Row>
  );
};

export default MainTopNavBar;