import React, { FC } from 'react'
import { Wrapper } from './ResultSidebarStyles'
import { ResultButton, ResultType } from '../'

interface Props {
  readonly userCount: number
  readonly repoCount: number
  readonly type: ResultType
  readonly setType: React.Dispatch<React.SetStateAction<ResultType>>
  readonly isFetchingRepository: boolean
  readonly isFetchingUsers: boolean
}

export const ResultSidebar: FC<Props> = (props) => {
  const { userCount, repoCount, type, setType, isFetchingRepository, isFetchingUsers } = props

  return (
    <Wrapper>
      <ResultButton
        text="Repositories"
        isLoading={isFetchingRepository}
        active={type === ResultType.REPOSITORY}
        count={Number(repoCount).toLocaleString()}
        onClick={() => setType(ResultType.REPOSITORY)}
      />
      <ResultButton
        text="Users"
        isLoading={isFetchingUsers}
        active={type === ResultType.USER}
        count={Number(userCount).toLocaleString()}
        onClick={() => setType(ResultType.USER)}
      />
    </Wrapper>
  )
}