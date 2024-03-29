import React, { useEffect, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../state/reducers";
import { IProduct } from "../../types/shoppingAreaTypes";
import Product from "./Product";

const FoodProductsList: React.FC = () => {
  const products = useSelector((state: AppState) => state.products.products);

  const renderProducts = useCallback(() => {
    if(products?.length === 0 || !products){
      return;
    }
    const productsList = products?.filter(product => product.category.title === 'Food');
    return productsList.map( (product: IProduct) => {
      return <Product key={product.id} 
                      product={product}/>
    })
  }, [products]);

  useEffect(() => {
    renderProducts();
  }, [products, renderProducts]);

  return (
    <Col xs={12} sm={12}>
      <Row className='product-list justify-content-center justify-content-sm-start mt-5 mb-5'>
        <h5>Food</h5>
        {renderProducts()}
      </Row>
    </Col>
  )
}

export default FoodProductsList;