import { useState, useEffect, useRef } from 'react'
import { client, UserType } from '../../components'
import { GET_USERS } from './gql'

export const useGetUsers = (query: string) => {
  const [users, setUsers] = useState<UserType[]>([])
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
    
    client.request(GET_USERS, variables).then(data => {
      cache.current = { after, query }
      setPageInfo(() => (data.search.pageInfo as typeof pageInfo))
      setCount(() => (data.search.userCount as number))
      setUsers(users => {
        const moreUsers = data.search.users as UserType[]
        return queryHasChanged ? moreUsers : users.concat(moreUsers)
      })
    })
  }, [after, query])

  return {
    users,
    setAfter,
    userCount: count,
    userPageInfo: pageInfo,
    isFetchingUsers: cache.current.query !== query
  }
}