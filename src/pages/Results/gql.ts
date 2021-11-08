import { gql } from 'graphql-request'

export const GET_REPOSITORIES = gql`
  query GetRepos($query: String!, $first: Int, $after: String, $last: Int, $before: String) {
    search(query: $query, first: $first, type: REPOSITORY, after: $after, last: $last, before: $before) {
      nodes {
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
      count:repositoryCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`

export const GET_USERS = gql`
  query GetUsers($query: String!, $first: Int, $after: String, $last: Int, $before: String) {
    search(query: $query, first: $first, type: USER, after: $after, last: $last, before: $before) {
      nodes {
        ... on User {
          name
          bio
          login
        }
      }
      count:userCount
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