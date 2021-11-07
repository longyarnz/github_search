import React, { FC } from 'react'
import { FlatList } from '@longyarnz/flat-list'
import { Wrapper } from './ResultPanelStyles'
import { UserResultTab, RepoResultTab, ResultType, UserType, RepositoryType } from '../'
import { ShouldRender } from 'should-render'
import { Spinner } from '../Spinner'

interface Props {
  readonly type: ResultType
  readonly userCount: number
  readonly repoCount: number
  readonly users: UserType[]
  readonly repos: RepositoryType[]
  readonly isFetchingRepository: boolean
  readonly isFetchingUsers: boolean
}

export const ResultPanel: FC<Props> = (props) => {
  const { type, users, repos, userCount, repoCount, isFetchingUsers, isFetchingRepository } = props
  const resultIsUserTyped = type === ResultType.USER
  const count = resultIsUserTyped ? userCount : repoCount
  const list = resultIsUserTyped ? users : repos
  const Tab = resultIsUserTyped ? UserResultTab : RepoResultTab
  const loading = resultIsUserTyped ? isFetchingUsers : isFetchingRepository
  const header = loading ? 'Searching GitHub...' : `${Number(count).toLocaleString()} ${type} results`

  return (
    <Wrapper $loading={loading}>
      <h2>{header}</h2>
      <div>
        <ShouldRender if={!loading}>
          <FlatList
            list={list as Partial<UserType & RepositoryType>[]}
            listView={(item) => {
              if (!resultIsUserTyped) {
                item.language = item.languages.nodes[0]?.name ?? '-'
                item.license = item.licenseInfo?.name ?? '-'
              }

              return item.name ? (
                <Tab
                  key={item.name}
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