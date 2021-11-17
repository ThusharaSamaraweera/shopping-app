import React from "react";
import {Container} from "react-bootstrap";
import TopNavBar from "../components/NavBars/TopNavBar";
import MiddleNavBar from "../components/NavBars/MiddleNavBar";
import ShoppingArea from "../components/ShoppingArea";
import Footer from "../components/Footer";

const ShoppingApp: React.FC = () => {
  return (
    <Container fluid={true}>
      <TopNavBar/>
      <MiddleNavBar/>
      <ShoppingArea/>
      <Footer/>
    </Container>
  );
}

export default ShoppingApp;