import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation addProduct($newProduct: InputProduct!){
    addProduct(newProduct: $newProduct){
      ...product
    }
  }

  fragment product on Product{
    id
    title
    image
  }
`