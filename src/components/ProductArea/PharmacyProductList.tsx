import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../state/reducers";
import { IProduct } from "../../types/shoppingAreaTypes";
import Product from "./Product";

const PharmacyProductsList: React.FC = () => {
  const products = useSelector((state: AppState) => state.products.products);

  const renderProducts = () => {
    if(products?.length === 0 || !products){
      return;
    }
    const productsList = products?.filter(product => product.category.id === 2);

    return productsList.map( (product: IProduct) => {
      return <Product key={product.id} 
                      product={product}/>
    })
  }

  useEffect(() => {
    renderProducts();
  }, [products])

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