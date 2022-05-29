import { gql } from "@apollo/client";

export const PLACE_ORDER = gql`
  mutation placeOrder($newOrder: InputOrder!){
    placeOrder(newOrder: $newOrder){
      ...orderDetails
    }
  }

  fragment orderDetails on Order{
    id 
    orderCode
    requestedDate
    shippingDetails {
      fullName
    }
  }
`