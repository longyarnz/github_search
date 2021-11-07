import React, { FC, ReactNode } from 'react'
import { Wrapper } from './GitHubButtonStyles'

interface Props {
  text?: string
  onClick?: () => void
  children?: ReactNode
}

export const GitHubButton: FC<Props> = (props) => {
  const { text, children, onClick } = props
  const content = children || (
    <button onClick={onClick}>
      <span>{text}</span>
    </button>
  )

  return (
    <Wrapper>
      {content}
    </Wrapper>
  )
}