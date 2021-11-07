import { useState, useEffect } from 'react'
import { client } from '../'
import { GET_CURRENT_USER } from './gql'

export const useGitHubUser = () => {
  const [user, setUser] = useState(() => {
    const { name = '', avatarUrl = '' } = JSON.parse(sessionStorage.getItem('USER_DATA') || '{}')
    return { name, avatarUrl }
  })

  useEffect(() => {
    !user.name && client.request(GET_CURRENT_USER).then(data => {
      setUser(data.viewer as typeof user)
      sessionStorage.setItem('USER_DATA', JSON.stringify(data.viewer))
    })
  }, [user])

  return user
}