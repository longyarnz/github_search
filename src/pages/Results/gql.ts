import { gql } from 'graphql-request'

export const GET_REPOSITORIES = gql`
  query GetRepos($query: String!, $first: Int!, $after: String) {
    search(query: $query, first: $first, type: REPOSITORY, after: $after) {
      repos:nodes {
        ... on Repository {
          name:nameWithOwner
          stars:stargazerCount
          time:updatedAt
          description
          languages(first: 1) {
            nodes {
              name
            }
          }
          licenseInfo {
            name
          }
        }
      }
      repositoryCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`

export const GET_USERS = gql`
  query GetUsers($query: String!, $first: Int!, $after: String) {
    search(query: $query, first: $first, type: USER, after: $after) {
      users:nodes {
        ... on User {
          name
          bio
          login
        }
      }
      userCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`

export enum ResultType {
  USER = 'user',
  REPOSITORY = 'repository'
}