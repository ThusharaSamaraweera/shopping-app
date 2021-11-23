import React from "react";
import { Row } from "react-bootstrap";
import GroceryProductsList from "./GroceryProductsLists";

const ProductsList: React.FC = () => {

  return (
    <Row className='product-lists'>
      <GroceryProductsList/>
    </Row>
  )
}

export default ProductsList;