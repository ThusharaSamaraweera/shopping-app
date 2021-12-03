import React, { useState } from "react";
import {Button, Nav, Navbar, Row} from "react-bootstrap";
import {Phone, User} from "react-feather";
import {Redirect, Link} from "react-router-dom";

const TopNavBar:React.FC = () => {
  const [isRedirectAccount, setIsRedirectAccount] = useState(false);
  const [isRedirectRegister, setRedirectRegister] = useState(false);
  // const [isRedirectRegiser, see]

  const handleOnAccountRedireact = () => {
    setIsRedirectAccount(true);
  }

  const handleOnRegisterRedirect = () => {
    setRedirectRegister(true);
  }

  return (
    <Row className='top-nav-col'>
      <Navbar expand="md">
        <i className='phone-icon'><Phone size='1.1em'/></i>
        <a href='#number' className='number'>+94779 510 260</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Row className='delivery-area'>
              <i className="fas fa-truck fa-md"/>
              <a href="#delivery-area">Delivery Areas</a>
            </Row>

            {isRedirectAccount && <Redirect to='/account'/>}
            <Row className='my-account' onClick={handleOnAccountRedireact}>
              <i><User size='1.1em'/></i>
              <a href="#account">My Account</a>
            </Row>

            {isRedirectRegister && <Redirect to='/register' />}
            <div className='register' onClick={handleOnRegisterRedirect}>
              <Button variant="outline-success">Register</Button>
            </div>

            <Row className='login-row'>
              <Link to={'login'}>Login</Link>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='divider'> </div>
    </Row>
  );
};

export default TopNavBar;