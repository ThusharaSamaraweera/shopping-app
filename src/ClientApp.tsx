import { QueryResult, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import {useDispatch} from "react-redux";

import ShoppingAreaRoute from "./components/Route/ShoppingAreaRoute";
import { GET_ALL_PRODUCTS } from "./graphQL/products/productQuery";
import { setAuthUser } from "./state/actions/authActions";
import { setInitProducts } from "./state/actions/productListActions";

const ClientApp: React.FC = () => {
  const dispatch = useDispatch();
  const products: QueryResult = useQuery(GET_ALL_PRODUCTS);

  useEffect(() => {
    if(!products || !products.data){
      return;
    }
    dispatch(setInitProducts(products.data.getAllProducts));

    const authUser = sessionStorage.getItem('authUser')
    if(authUser){
      dispatch(setAuthUser(JSON.parse(authUser)))
    }
  }, [dispatch, products, products.data]);

  return (
    <ShoppingAreaRoute/>
  );
}

export default ClientApp;