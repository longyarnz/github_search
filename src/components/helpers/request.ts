import { GraphQLClient } from 'graphql-request'

const ENDPOINT = 'https://api.github.com/graphql'
export const client = new GraphQLClient(ENDPOINT, { 
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('INDICINA_AUTH')}`
  }
})