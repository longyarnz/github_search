import React, { FC } from 'react'
import { FlatList } from '@longyarnz/flat-list'
import { Wrapper } from './ResultSidebarStyles'
import { ResultButton } from '../ResultButton'

type ResultValues = {
  readonly text: string
  readonly count: string
}

interface Props {
  readonly values?: ResultValues[]
}

const test = [
  {
    text: 'Lekan',
    count: '100'
  },
  {
    text: 'Babboe',
    count: '500'
  },
]

export const ResultSidebar: FC<Props> = (props) => {
  const { values = test } = props

  return (
    <Wrapper>
      <FlatList
        list={values}
        listView={({ text, count }) => (
          <ResultButton
            key={text}
            text={text}
            count={count}
            active={text === 'Lekan'}
          />
        )}
      />
    </Wrapper>
  )
}