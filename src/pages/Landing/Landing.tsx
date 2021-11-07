import React, { FC } from 'react'
import { LoginWithGitHubButton, useErrorHandler } from '../../components'
import { Wrapper } from './LandingStyles'

interface Props {
  readonly authorizeUser: React.Dispatch<React.SetStateAction<string>>
}

export const Landing: FC<Props> = (props) => {
  const { authorizeUser } = props
  const { setError, Banner } = useErrorHandler()

  const getAccessToken = async (code: string) => {
    const url = process.env.REACT_APP_AUTH_URL

    const request = await fetch(url, {
      method: 'POST',
      body: `{"code": "${code}"}`,
      headers: {
        'Content-type': 'application/json'
      }
    })

    const response = await request.json()
    const accessToken = response?.data?.access_token as string
    const error = response?.data?.error as string
    accessToken && authorizeUser(accessToken)
    error && setError(error)
  }

  const login = (code: string) => {
    getAccessToken(code)
  }

  return (
    <Wrapper>
      <Banner>
        <LoginWithGitHubButton text="Login to GitHub" onClick={login} />
      </Banner>
    </Wrapper>
  )
}