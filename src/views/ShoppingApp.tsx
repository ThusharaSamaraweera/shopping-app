import React from "react";
import {Container} from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import MiddleNavBar from "../components/MiddleNavBar";
import ShoppingArea from "../components/ShoppingArea";

const ShoppingApp: React.FC = () => {
  return (
    <Container fluid={true}>
      <TopNavBar/>
      <MiddleNavBar/>
      <ShoppingArea/>
    </Container>
  );
}

export default ShoppingApp;