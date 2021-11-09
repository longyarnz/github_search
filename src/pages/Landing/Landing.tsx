import React, { FC, useState } from 'react'
import { ShouldRender } from 'should-render'
import { client, LoginWithGitHubButton, Spinner, useErrorHandler } from '../../components'
import { Wrapper } from './LandingStyles'

interface Props {
  readonly authorizeUser: React.Dispatch<React.SetStateAction<string>>
}

export const Landing: FC<Props> = (props) => {
  const { authorizeUser } = props
  const { setError, Banner } = useErrorHandler()
  const [loading, setLoading] = useState(false)

  const getAccessToken = async (code: string) => {
    const url = process.env.REACT_APP_AUTH_URL as string

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
    if (error) setError(error)
    else if (accessToken) {
      authorizeUser(accessToken)
      client.setHeader('Authorization', `Bearer ${accessToken}`)
    }
    setLoading(false)
  }

  const login = (code: string) => {
    setLoading(true)
    getAccessToken(code)
  }

  return (
    <Wrapper>
      <Banner>
        <ShouldRender if={loading}>
          <Spinner
            color="#000000"
            thickness={5}
            size={100}
          />
        </ShouldRender>
        <ShouldRender if={!loading}>
          <LoginWithGitHubButton text="Login to GitHub" onClick={login} />
        </ShouldRender>
      </Banner>
    </Wrapper>
  )
}