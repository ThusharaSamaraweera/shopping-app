import React from "react";
import {Container} from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";

const ShoppingApp: React.FC = () => {
  return (
    <Container fluid={true}>
      <TopNavBar/>
    </Container>
  );
}

export default ShoppingApp;