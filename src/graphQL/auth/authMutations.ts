import {gql} from '@apollo/client'

export const SIGNUP_CUSTOMER = gql`
  mutation addUser($newUser: InputUser!){
    addUser( newUser: $newUser){
      ...userDetails
    }
  }

  fragment userDetails on LogedUser{
    email
    name
    userType
    token
  }
`