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
  Pagination,
  UserType,
  RepositoryType
} from '../../components'
import { GET_REPOSITORIES, GET_USERS } from './gql'
import { Wrapper } from './ResultsStyles'
import { useGitHubSearch } from './useGitHubSearch'

interface Props extends PageInterface {
  readonly query: string
  readonly setSearchText?: React.Dispatch<React.SetStateAction<string>>
}

export const Results: FC<Props> = (props) => {
  const { changePageTo, logout, query, setSearchText } = props
  const formRef = useRef<HTMLFormElement>(null)
  const [type, setType] = useState(ResultType.REPOSITORY)

  const {
    nodes: users,
    count: userCount,
    paginate: paginateUser,
    isFetching: isFetchingUsers,
  } = useGitHubSearch<UserType>(query, GET_USERS)

  const {
    nodes: repos,
    count: repoCount,
    paginate: paginateRepository,
    isFetching: isFetchingRepository,
  } = useGitHubSearch<RepositoryType>(query, GET_REPOSITORIES)

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

  const resultIsUserType = type === ResultType.USER

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
          type={type}
          resultIsUserType={resultIsUserType}
          count={resultIsUserType ? userCount : repoCount}
          list={resultIsUserType ? users : repos}
          isFetching={resultIsUserType ? isFetchingUsers : isFetchingRepository}
        />
      </div>
      <Pagination
        count={resultIsUserType ? userCount : repoCount}
        paginate={resultIsUserType ? paginateUser : paginateRepository}
      />
    </Wrapper>
  )
}