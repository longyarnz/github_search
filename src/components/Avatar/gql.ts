import { gql } from 'graphql-request'

export const GET_CURRENT_USER = gql`
  query GetCurrentUser{
    viewer {
      name
      avatarUrl
    }
  }
`