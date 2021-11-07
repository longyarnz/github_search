import { useState, useEffect, useRef } from 'react'
import { client, RepositoryType } from '../../components'
import { GET_REPOSITORIES } from './gql'

export const useGetRepos = (query: string) => {
  const [repos, setRepos] = useState<RepositoryType[]>([])
  const [after, setAfter] = useState(null)
  const [count, setCount] = useState(0)
  const cache = useRef({ after: '', query: '' })
  const [pageInfo, setPageInfo] = useState({
    startCursor: '',
    endCursor: '',
    hasNextPage: true
  })

  useEffect(() => {
    const variables = { query, first: 10, after }
    const queryHasChanged = cache.current.query !== query
    
    client.request(GET_REPOSITORIES, variables).then(data => {
      cache.current = { after, query }
      setPageInfo(() => (data.search.pageInfo as typeof pageInfo))
      setCount(() => (data.search.repositoryCount as number))
      setRepos(repos => {
        const moreRepos = data.search.repos as RepositoryType[]
        return queryHasChanged ? moreRepos : repos.concat(moreRepos)
      })
    })
  }, [after, query])

  return {
    repos,
    setAfter,
    repoCount: count,
    isFetchingRepository: cache.current.query !== query
  }
}