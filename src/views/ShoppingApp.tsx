import React from "react";
import {Container} from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import MiddleNavBar from "../components/MiddleNavBar";

const ShoppingApp: React.FC = () => {
  return (
    <Container fluid={true}>
      <TopNavBar/>
      <MiddleNavBar/>
    </Container>
  );
}

export default ShoppingApp;