import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Category from "./Category";

const Categories: React.FC = () => {
  return (
      <Container>
        <Row>
          <Col>
            <h1 className="our-product-txt text-center mt-3">Our Products</h1>
          </Col>
        </Row>
        <Category/>
      </Container>
  );
}

export default Categories;