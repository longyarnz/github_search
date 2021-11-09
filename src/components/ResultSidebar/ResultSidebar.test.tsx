import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ResultSidebar } from './ResultSidebar'
import { ResultType } from '../types'

it('renders the ResultSidebar with the props', async () => {
  const props = {
    userCount: 1,
    repoCount: 2,
    type: ResultType.USER,
    setType: jest.fn(),
    isFetchingRepository: true,
    isFetchingUsers: false
  }

  const { rerender } = render(
    <ResultSidebar
      {...props}
    />
  )

  const user = screen.getByText(/Users/)
  expect(user).toBeInTheDocument()

  const userCount = screen.getByText(props.userCount)
  expect(userCount).toBeInTheDocument()

  const repo = screen.getByText(/Repositories/)
  expect(repo).toBeInTheDocument()

  const repoCount = screen.queryByText(props.repoCount)
  expect(repoCount).not.toBeInTheDocument()

  fireEvent.click(user)
  await waitFor(() => expect(props.setType).toHaveBeenCalledTimes(1))

  rerender(
    <ResultSidebar
      {...props}
      isFetchingRepository={false}
    />
  )

  const newRepoCount = screen.queryByText(props.repoCount)
  expect(newRepoCount).toBeInTheDocument()
})