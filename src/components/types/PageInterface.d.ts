export enum Pages {
  LANDING = 'landing',
  SEARCH = 'search',
  RESULT = 'result'
}

export interface PageInterface {
  readonly changePageTo?: React.Dispatch<React.SetStateAction<Pages>>
  readonly logout?: () => void
}

export enum ResultType {
  USER = 'user',
  REPOSITORY = 'repository'
}

export type RepositoryType = {
  readonly name: string
  readonly description: string
  readonly stars: string
  readonly licenseInfo: {
    name: string
  }
  readonly languages: {
    nodes: [{
      name: string
    }]
  }
  language?: string
  license?: string
  readonly time: string
}

export type UserType = {
  name: string
  bio: string
  login: string
}

export type Variables = {
  query?: string
  first?: number
  last?: number
  after?: string
  before?: string
}

export type PageInfo = {
  startCursor?: string
  endCursor?: string
  hasNextPage?: boolean
}