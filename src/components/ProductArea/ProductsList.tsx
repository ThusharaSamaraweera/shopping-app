import React from "react";
import { Row } from "react-bootstrap";
import GroceryProductsList from "./GroceryProductsLists";

const ProductsList: React.FC = () => {

  return (
    <Row className='product-lists px-lg-8 py-2'>
      <GroceryProductsList/>
    </Row>
  )
}

export default ProductsList;