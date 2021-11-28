import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../state/reducers";
import { IProduct } from "../../types/shoppingAreaTypes";
import Product from "./Product";

const GroceryProductsList: React.FC = () => {
  const products = useSelector((state: AppState) => state.products.products);

  const renderProducts = () => {
    if(products?.length === 0 || !products){
      return;
    }
    const productsList = products?.filter(product => product.category.id === 1);

    return productsList.map( (product: IProduct) => {
      return <Product key={product.id} 
                      product={product}/>
    })
  };

  useEffect(() => {
    renderProducts();
  }, [products]);

  return (
    <Col xs={12} sm={12}>
      <Row className='product-list mt-5 mb-5'>
        <h5>Grocery</h5>
        {renderProducts()}
      </Row>
    </Col>
  )
}

export default GroceryProductsList;