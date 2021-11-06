import React, { FC } from 'react'
import { Wrapper } from './ResultButtonStyles'

interface Props {
  readonly text: string
  readonly count: string
  readonly active?: boolean
}

export const ResultButton: FC<Props> = (props) => {
  const { text, count, active } = props

  return (
    <Wrapper $isActive={active}>
      <span>{text}</span>
      <span>{count}</span>
    </Wrapper>
  )
}