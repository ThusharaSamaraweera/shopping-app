import {gql} from "@apollo/client";

export const GET_ALL_ORDERS = gql`
  query getAllOrders{
    getAllOrders {
      id
      orderCode
      requestedUser {
        name
        address
        city
        postalCode
        country
        phoneNumber
      }
      productList {
        id
        title
        quantity
        category {
          title
        }
        discount_price
        regular_price
        image
      }
      shippingDetails {
        fullName
        address
        city
        postalCode
        country
        contactNumber
      }
      status
      paymentType
      paymentStatus
      deliveryInstructions
      requestedDate
    }
  }
`