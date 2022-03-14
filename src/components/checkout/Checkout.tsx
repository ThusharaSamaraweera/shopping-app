import React from "react";
import { Container } from "react-bootstrap";
import CheckoutArea from "../checkoutArea/CheckoutArea";
import BottomNabBar from "../NavBars/BottomNavBar";
import MainMiddleNavBar from "../NavBars/MiddleNavBar";
import TopNavBar from "../NavBars/TopNavBar";
import ShippingForm from '../../components/checkoutShippingForm';

const Checkout:React.FC = () => {

  return (
    <Container fluid={true}>
      <TopNavBar/>
      <MainMiddleNavBar/>
      <BottomNabBar/>
      <CheckoutArea/>
      <ShippingForm/>
    </Container>
  )
}

export default Checkout;