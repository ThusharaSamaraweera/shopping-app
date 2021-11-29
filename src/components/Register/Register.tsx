import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import MainMiddleNavBar from "../NavBars/MiddleNavBar";
import TopNavBar from "../NavBars/TopNavBar";

const Register:React.FC = () => {

  return (
    <Container fluid={true}>
      <TopNavBar/>
      <MainMiddleNavBar/>
      <div>
        Register
      </div>
      <Footer/>
    </Container>
  )
}