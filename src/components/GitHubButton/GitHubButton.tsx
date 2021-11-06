import React, { ButtonHTMLAttributes, FC } from 'react'
import { Wrapper } from './GitHubButtonStyles'

interface GitHubButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export const GitHubButton: FC<GitHubButtonProps> = (props) => {
  const { text, ...rest } = props

  return (
    <Wrapper {...rest}>
      <span>{text}</span>
    </Wrapper>
  )
}