import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import MainMiddleNavBar from "../NavBars/MiddleNavBar";
import TopNavBar from "../NavBars/TopNavBar";

const Login:React.FC = () => {

  return (
    <Container fluid={true}>
      <TopNavBar/>
      <MainMiddleNavBar/>
      <div>
        Login
      </div>
      <Footer/>
    </Container>
  )
}

export default Login;