import {gql} from '@apollo/client'

export const GET_ALL_CATEGORY = gql`
  query getAllCategories{
    getAllCategories{
      id
      title
    }
  }
`