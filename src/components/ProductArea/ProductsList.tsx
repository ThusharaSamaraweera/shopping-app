import React from "react";
import { Row } from "react-bootstrap";
import ElectronicProductsList from "./ElectronicProductsList";
import FoodProductsList from "./FoodProductsList";
import GroceryProductsList from "./GroceryProductsList";
import PharmacyProductsList from "./PharmacyProductList";

const ProductsList: React.FC = () => {

  return (
    <Row className='product-lists px-lg-8 py-2'>
      <GroceryProductsList/>
      <PharmacyProductsList/>
      <FoodProductsList/>
      <ElectronicProductsList/>
    </Row>
  )
}

export default ProductsList;