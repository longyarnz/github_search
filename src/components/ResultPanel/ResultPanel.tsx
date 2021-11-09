import React, { FC } from 'react'
import { FlatList } from '@longyarnz/flat-list'
import { Wrapper } from './ResultPanelStyles'
import { UserResultTab, RepoResultTab, UserType, RepositoryType, Spinner } from '../'
import { ShouldRender } from 'should-render'

interface Props {
  readonly type: string
  readonly count: number
  readonly list: Partial<UserType & RepositoryType>[]
  readonly isFetching: boolean
  readonly resultIsUserType: boolean
}

export const ResultPanel: FC<Props> = (props) => {
  const { list, count, isFetching, resultIsUserType, type } = props
  const Tab = resultIsUserType ? UserResultTab : RepoResultTab
  const header = isFetching ? 'Searching GitHub...' : `${Number(count).toLocaleString()} ${type} result${count > 1 ? 's' : ''}`
  const loading = isFetching && list.length === 0

  return (
    <Wrapper $loading={loading}>
      <h2>{header}</h2>
      <div>
        <ShouldRender if={!loading}>
          <FlatList
            list={list}
            listView={(item) => {
              let key = ''
              if (!resultIsUserType) {
                item.language = item.languages.nodes[0]?.name ?? '-'
                item.license = item.licenseInfo?.name ?? '-'
                key = item.name
              }
              else key = `${item.name}${item.bio || item.login}`

              return item.name ? (
                <Tab
                  key={key}
                  {...item}
                />
              ) : null
            }}
          />
        </ShouldRender>

        <ShouldRender if={loading}>
          <Spinner
            size={50}
            thickness={3}
            color="#000"
          />
        </ShouldRender>
      </div>
    </Wrapper>
  )
}