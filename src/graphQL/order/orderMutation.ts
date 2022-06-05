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
export const CHANGE_ORDER_STATUS = gql`
 mutation changeOrderStatus($id: String!, $newStatus:String!){
  changeOrderStatus(id: $id, newStatus: $newStatus){
    ...changeOrderStatueResponse
  }
 }

 fragment changeOrderStatusResponse on changeOrderStatueResponse {
   order{
     id
     orderCode
     status
   }
   errorMassages
 }
`
