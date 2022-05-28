import React from "react";
import {Navbar, Row, Nav, NavDropdown, Container} from "react-bootstrap";

const BottomNabBar: React.FC = () => {
  return (
    <Container>
      <Row className='shopping-area-nav-bar'>
        <Navbar expand="sm" className='nav-nar-third'>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown className='nav-drop-down' title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Grocery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pharmacy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Food</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Electronic</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
              <Nav.Link href="#About">About Us</Nav.Link>
              <Nav.Link href="#Contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
}

export default BottomNabBar;