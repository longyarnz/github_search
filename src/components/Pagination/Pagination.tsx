import React, { FC, useRef, useCallback, useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Caret } from './Caret'
import { Wrapper } from './PaginationStyles'

const RESULT_PER_PAGE = 10

interface Props {
  readonly count: number
  readonly paginate: (offset: number) => void
}

export const Pagination: FC<Props> = (props) => {
  const { count, paginate } = props
  const [page, setPage] = useState(0)
  const cache = useRef({})
  const selected = useRef(0)
  const pageCount = Math.ceil(count / RESULT_PER_PAGE)

  useEffect(() => {
    selected.current = cache.current[count] || 0
    setPage(selected.current)
  }, [count])

  const handlePageClick = useCallback((event: { selected: number }) => {
    const offset = (event.selected - selected.current) * RESULT_PER_PAGE
    selected.current = event.selected
    cache.current[count] = event.selected
    paginate(event.selected === 0 ? 0 : offset)
    setPage(event.selected)
  }, [count, paginate])

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
        forcePage={page}
      />
    </Wrapper>
  )
}