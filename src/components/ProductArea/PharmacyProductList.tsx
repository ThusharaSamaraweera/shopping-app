import React, { useCallback, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../state/reducers";
import { IProduct } from "../../types/shoppingAreaTypes";
import Product from "./Product";

const PharmacyProductsList: React.FC = () => {
  const products = useSelector((state: AppState) => state.products.products);

  const renderProducts = useCallback(() => {
    if(products?.length === 0 || !products){
      return;
    }
    const productsList = products?.filter(product => product.category.title === "Pharmacy");

    return productsList.map( (product: IProduct) => {
      return <Product key={product.id} 
                      product={product}/>
    })
  }, [products])

  useEffect(() => {
    renderProducts();
  }, [products, renderProducts]);

  return (
    <Col>
      <Row className='product-list'>
        <h5>Pharmacy</h5>
        {renderProducts()}
      </Row>
    </Col>
  )
}

export default PharmacyProductsList;