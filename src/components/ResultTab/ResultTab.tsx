import React, { FC } from 'react'
import { Wrapper } from './ResultTabStyles'

interface Props {
  readonly header: string
  readonly subheader: string
  readonly stars: string
  readonly license: string
  readonly language: string
  readonly time: string
}

export const ResultTab: FC<Props> = (props) => {
  const { header, subheader, stars, language, license, time } = props
  const footer = `${stars}k Stars | ${language} | ${license} | Updated ${time}`

  return (
    <Wrapper>
      <div>{header}</div>
      <div>{subheader}</div>
      <div>{footer}</div>
    </Wrapper>
  )
}