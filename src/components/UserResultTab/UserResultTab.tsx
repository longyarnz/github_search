import React, { FC } from 'react'
import { Wrapper } from './UserResultTabStyles'

interface Props {
  readonly name?: string
  readonly login?: string
  readonly bio?: string
}

export const UserResultTab: FC<Props> = (props) => {
  const { name, login, bio } = props

  return (
    <Wrapper>
      <div>
        <span>{name}</span>
        <span>{login}</span>
      </div>
      <div>{bio}</div>
    </Wrapper>
  )
}