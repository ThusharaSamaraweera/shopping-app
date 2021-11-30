import React from "react";
import { Container } from "react-bootstrap";
import BottomNabBar from "../NavBars/BottomNavBar";
import MainMiddleNavBar from "../NavBars/MiddleNavBar";
import TopNavBar from "../NavBars/TopNavBar";

const Checkout:React.FC = () => {

  return (
    <Container fluid={true}>
      <TopNavBar/>
      <MainMiddleNavBar/>
      <BottomNabBar/>
    </Container>
  )
}

export default Checkout;