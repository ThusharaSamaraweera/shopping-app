import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import MainMiddleNavBar from "../NavBars/MiddleNavBar";
import TopNavBar from "../NavBars/TopNavBar";

const Account: React.FC = () => {

  return (
    <Container fluid={true}>
      <TopNavBar/>
      <MainMiddleNavBar/>
      <div>
        account
      </div>
      <Footer/>
    </Container>
  )
}

export default Account;