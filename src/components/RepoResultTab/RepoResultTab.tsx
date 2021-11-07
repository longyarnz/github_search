import moment from 'moment'
import React, { FC } from 'react'
import { Wrapper } from './RepoResultTabStyles'

interface Props {
  readonly name?: string
  readonly description?: string
  readonly stars?: string
  readonly license?: string
  readonly language?: string
  readonly time?: string
}

export const RepoResultTab: FC<Props> = (props) => {
  const { name, description, stars, language, license, time } = props
  const footer = `${Number(stars).toLocaleString()}k Stars | ${language} | ${license} | Updated ${moment(time).fromNow()}`

  return (
    <Wrapper>
      <div>{name}</div>
      <div>{description}</div>
      <div>{footer}</div>
    </Wrapper>
  )
}