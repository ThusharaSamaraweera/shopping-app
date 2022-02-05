import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import ElectronicProductsList from "./ElectronicProductsList";
import FoodProductsList from "./FoodProductsList";
import GroceryProductsList from "./GroceryProductsList";
import PharmacyProductsList from "./PharmacyProductList";
import { AppState } from "../../state/reducers";

const ProductsList: React.FC = () => {
  const activeCategory = useSelector( (state: AppState) => state.category.category);

  const renderProducts = () => {
    if(activeCategory.title === 'All'){
      return (
        <Fragment>
          <GroceryProductsList/>
          <PharmacyProductsList/>
          <FoodProductsList/>
          <ElectronicProductsList/>          
        </Fragment>      
      )
    }else if( activeCategory.title === 'Grocery'){
      return <GroceryProductsList/>
    }else if( activeCategory.title === 'Pharmacy'){
      return <PharmacyProductsList/>
    }else if( activeCategory.title === 'Food'){
      return <FoodProductsList/>
    }else if( activeCategory.title === 'Electronics'){
      return <ElectronicProductsList/>
    }
  }
  return (
    <Row className='product-lists px-lg-8 py-2'>
      {renderProducts()}
    </Row>
  )
}

export default ProductsList;