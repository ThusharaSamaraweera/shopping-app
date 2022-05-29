import React from "react";
import { Button, Nav, Navbar, Row } from "react-bootstrap";
import { Phone, User } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import GuestComponent from "../common/authGuards/GeustComponent";
import { useDispatch } from "react-redux";
import { logout } from "../../state/actions/authActions";
import UserComponent from "../common/authGuards/UserComponent";

const TopNavBar: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnAccountRedireact = () => {
    history.push("/account");
  };

  const handleOnRegisterRedirect = () => {
    history.push("/register");
  };

  const handleOnLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <Row className="top-nav-col">
      <Navbar expand="md">
        <i className="phone-icon">
          <Phone size="1.1em" />
        </i>
        <a href="#number" className="number">
          +94779 510 260
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Row className="delivery-area">
              <i className="fas fa-truck fa-md" />
              <a href="#delivery-area">Delivery Areas</a>
            </Row>

            <UserComponent>
              <Row className="my-account" onClick={handleOnAccountRedireact}>
                <i>
                  <User size="1.1em" />
                </i>
                <a href="account">My Account</a>
              </Row>
            </UserComponent>

            <GuestComponent>
              <div className="register">
                <Button
                  variant="outline-success"
                  onClick={handleOnRegisterRedirect}
                >
                  Register
                </Button>
              </div>
            </GuestComponent>

            <GuestComponent>
              <div className="login-div">
                <Link to={"login"}>Login</Link>
                {/* <Button variant="outline-success">Login</Button> */}
              </div>
            </GuestComponent>

            <UserComponent>
              <div className="register">
                <Button variant="outline-success" onClick={handleOnLogout}>
                  Logout
                </Button>
              </div>
            </UserComponent>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="divider"> </div>
    </Row>
  );
};

export default TopNavBar;
