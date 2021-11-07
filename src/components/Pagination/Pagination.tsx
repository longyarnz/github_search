import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { ResultType } from '../types'
import { Caret } from './Caret'
import { Wrapper } from './PaginationStyles'

const ITEMS_PER_PAGE = 10

interface Props {
  readonly userCount: number
  readonly repoCount: number
  readonly repoPageInfo?: {
    endCursor: string
    startCursor: string
    hasNextPage: boolean
  }
  readonly userPageInfo?: {
    endCursor: string
    startCursor: string
    hasNextPage: boolean
  }
  readonly isFetchingRepository: boolean
  readonly isFetchingUsers: boolean
  readonly type: ResultType
}

export const Pagination: FC<Props> = (props) => {
  const { type, userCount, repoCount } = props
  const resultIsUserType = type === ResultType.USER
  const count = resultIsUserType ? userCount : repoCount
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE)

  const handlePageClick = (event) => {
    console.log(event)
  }

  return (
    <Wrapper>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<Caret color="#FFFFFF" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel={<Caret color="#FFFFFF" />}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        forcePage={0}
      />
    </Wrapper>
  )
}