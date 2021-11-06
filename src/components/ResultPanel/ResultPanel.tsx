import React, { FC } from 'react'
import { FlatList } from '@longyarnz/flat-list'
import { Wrapper } from './ResultPanelStyles'
import { ResultTab } from '../ResultTab'

const test = [
  {
    header: "DrKLO/Telegram",
    subheader: "Telegram for Android source",
    stars: "17.2",
    language: "Java",
    license: "GPL-2.0 License",
    time: "4 hours ago"
  },
  {
    header: "DrKLO/Telegram",
    subheader: "Telegram for Android source",
    stars: "17.2",
    language: "Java",
    license: "GPL-2.0 License",
    time: "4 hours ago"
  },
]

type List = {
  readonly header: string
  readonly subheader: string
  readonly stars: string
  readonly license: string
  readonly language: string
  readonly time: string
}

interface Props {
  readonly type?: 'repository' | 'user'
  readonly count?: number
  readonly list?: List[]
}

export const ResultPanel: FC<Props> = (props) => {
  const { type = 'repository', count = 2096, list = test } = props

  return (
    <Wrapper>
      <h2>
        {count} {type} results
      </h2>
      <div>
        <FlatList
          list={list}
          listView={(item) => {
            return (
              <ResultTab
                {...item}
              />
            )
          }}
        />
      </div>
    </Wrapper>
  )
}