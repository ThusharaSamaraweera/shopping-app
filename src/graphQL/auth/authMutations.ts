import {gql} from '@apollo/client'

export const SIGNUP_CUSTOMER = gql`
  mutation addUser($newUser: InputUser!){
    addUser( newUser: $newUser){
      ...userDetails
    }
  }

  fragment userDetails on LogedUser{
    id
    email
    name
    userType
    token
  }
`
export const LOGIN = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
      ...userDetails
    }
  }

  fragment userDetails on LogedUser{
    id
    email
    name
    userType
    token
  }
`