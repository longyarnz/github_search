import React, { FC } from 'react'
import LoginGithub from 'react-login-github'
import { GitHubButton } from '../GitHubButton/GitHubButton'

interface Props {
  text: string
  onClick: (code: string) => void
}

type LoginGitHubSuccess = {
  code: string
}

export const LoginWithGitHubButton: FC<Props> = (props) => {
  const { text, onClick } = props

  const onSuccess = (response: LoginGitHubSuccess) => {
    onClick(response.code)
  }

  const onFailure = response => console.error(response)

  return (
    <GitHubButton>
      <LoginGithub
        clientId="4f262cc9e20d3043da02"
        onSuccess={onSuccess}
        onFailure={onFailure}
      >
        <span>{text}</span>
      </LoginGithub>
    </GitHubButton>
  )
}