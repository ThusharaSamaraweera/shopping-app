import React from "react";
import {Col, Row} from "react-bootstrap";
import Category from "./Category";

const Categories: React.FC = () => {
  return (
      <React.Fragment>
        <Row>
          <Col>
            <h1 className="our-product-txt text-center mt-3">Our Products</h1>
          </Col>
        </Row>
        <Category/>
      </React.Fragment>
  );
}

export default Categories;