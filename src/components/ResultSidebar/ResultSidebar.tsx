import React, { FC } from 'react'
import { Wrapper } from './ResultSidebarStyles'
import { ResultButton } from '../'

interface Props {
  readonly userCount: number
  readonly repoCount: number
  readonly isFetchingRepository: boolean
  readonly isFetchingUsers: boolean
}

export const ResultSidebar: FC<Props> = (props) => {
  const { userCount, repoCount, isFetchingRepository, isFetchingUsers } = props

  return (
    <Wrapper>
      <ResultButton
        text="Repositories"
        isLoading={isFetchingRepository}
        count={Number(repoCount).toLocaleString()}
        onClick={() => setType(ResultType.REPOSITORY)}
      />
      <ResultButton
        text="Users"
        isLoading={isFetchingUsers}
        count={Number(userCount).toLocaleString()}
        onClick={() => setType(ResultType.USER)}
      />
    </Wrapper>
  )
}