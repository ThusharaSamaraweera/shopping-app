import React from "react";
import {Button, Nav, Navbar, Row} from "react-bootstrap";
import {Phone, User} from "react-feather";
import { Link, useHistory} from "react-router-dom";
import PublicGuards from "../common/authGuards/PublicGuards";

const TopNavBar:React.FC = () => {
  const history = useHistory()

  const handleOnAccountRedireact = () => {
    history.push('/account')
  }

  const handleOnRegisterRedirect = () => {
    history.push('/register')
  }

  const handleOnLogout = () => {

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

            <Row className='my-account' onClick={handleOnAccountRedireact}>
              <i><User size='1.1em'/></i>
              <a href="#account">My Account</a>
            </Row>

            <div className='register' onClick={handleOnRegisterRedirect}>
              <Button variant="outline-success">Register</Button>
            </div>
            <PublicGuards>
              <Row className='login-row'>
                <Link to={'login'}>Login</Link>
              </Row>
            </PublicGuards>

            <div className='register' onClick={handleOnLogout}>
              <Button variant="outline-success">Logout</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='divider'> </div>
    </Row>
  );
};

export default TopNavBar;