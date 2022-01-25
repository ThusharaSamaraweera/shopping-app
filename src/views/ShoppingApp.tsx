import React from "react";
import {Container} from "react-bootstrap";
import ShoppingArea from "../components/ShoppingArea";
import Footer from "../components/Footer";

const ShoppingApp: React.FC = () => {
  return (
    <Container fluid={true}>
      <ShoppingArea/>
      <Footer/>
    </Container>
  );
}

export default ShoppingApp;