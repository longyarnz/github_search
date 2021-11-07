import React, {
  FC,
  useRef,
  useState,
  useLayoutEffect
} from 'react'
import {
  Avatar,
  GitLogo,
  ResultPanel,
  ResultSidebar,
  Searchbar,
  PageInterface,
  Pages,
  ResultType,
  Pagination
} from '../../components'
import { Wrapper } from './ResultsStyles'
import { useGetRepos } from './useGetRepos'
import { useGetUsers } from './useGetUsers'

interface Props extends PageInterface {
  readonly query: string
  readonly setSearchText?: React.Dispatch<React.SetStateAction<string>>
}

export const Results: FC<Props> = (props) => {
  const { changePageTo, logout, query, setSearchText } = props
  const formRef = useRef<HTMLFormElement>(null)
  const [type, setType] = useState(ResultType.REPOSITORY)
  const { users, userCount, isFetchingUsers, userPageInfo } = useGetUsers(query)
  const { repos, repoCount, isFetchingRepository, repoPageInfo } = useGetRepos(query)

  useLayoutEffect(() => {
    const input = formRef.current?.[0] as HTMLInputElement
    if (input) input.value = query
  }, [query])

  const goBack = () => {
    changePageTo(Pages.SEARCH)
  }

  const getSearchText = (text: string) => {
    sessionStorage.setItem('SEARCH_QUERY', text)
    setSearchText(text)
  }

  return (
    <Wrapper>
      <header>
        <GitLogo />
        <Searchbar
          width={380}
          height={40}
          form={formRef}
          getSearchText={getSearchText}
        />
        <Avatar logout={logout} goBack={goBack} />
      </header>
      <div>
        <ResultSidebar
          userCount={userCount}
          repoCount={repoCount}
          type={type}
          setType={setType}
          isFetchingUsers={isFetchingUsers}
          isFetchingRepository={isFetchingRepository}
        />
        <ResultPanel
          userCount={userCount}
          repoCount={repoCount}
          type={type}
          repos={repos}
          users={users}
          isFetchingUsers={isFetchingUsers}
          isFetchingRepository={isFetchingRepository}
        />
      </div>
      <Pagination
        type={type}
        userCount={userCount}
        repoCount={repoCount}
        userPageInfo={userPageInfo}
        repoPageInfo={repoPageInfo}
        isFetchingUsers={isFetchingUsers}
        isFetchingRepository={isFetchingRepository}
      />
    </Wrapper>
  )
}