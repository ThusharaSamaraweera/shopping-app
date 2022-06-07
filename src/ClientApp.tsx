import { QueryResult, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Spinner } from "react-bootstrap";

import ShoppingAreaRoute from "./components/Route/ShoppingAreaRoute";
import { GET_ALL_PRODUCTS } from "./graphQL/products/productQuery";
import { GET_ALL_CATEGORY } from "./graphQL/category/categoryQuery";
import { setAuthUser } from "./state/actions/authActions";
import { getProductFromSessionStorage } from "./state/actions/cartProductActions";
import { setInitProducts } from "./state/actions/productListActions";
import { getAllCategories } from "./state/actions/categoryActions";

const ClientApp: React.FC = () => {
  const dispatch = useDispatch();
  const products: QueryResult = useQuery(GET_ALL_PRODUCTS);
  const categories: QueryResult = useQuery(GET_ALL_CATEGORY);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (!products || !products.data || !categories || !categories.data) {
      console.log(products)
      setLoading(false)
      return;
    }
    dispatch(setInitProducts(products.data.getAllProducts));
    dispatch(getAllCategories(categories.data.getAllCategories));
    console.log(products.data);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dispatch, products, products.data, categories]);

  useEffect(() => {
    const authUser = sessionStorage.getItem("authUser");
    if (authUser) {
      dispatch(setAuthUser(JSON.parse(authUser)));
      dispatch(getProductFromSessionStorage());
    }
  }, []);

  if (loading) {
    return (
      <Container fluid={true} className="loading-page">
        {" "}
        <Spinner animation="grow" />
      </Container>
    );
  }

  return <ShoppingAreaRoute />;
};

export default ClientApp;
