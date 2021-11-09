import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ResultButton } from './ResultButton'

it('renders the ResultButton with the props', async () => {
  const mockFn = jest.fn()

  const { rerender } = render(
    <ResultButton
      text="Users"
      count="10,000"
      active={true}
      isLoading={false}
      onClick={mockFn}
    />
  )

  const text = screen.getByText(/Users/)
  expect(text).toBeInTheDocument()

  const count = screen.getByText(/10,000/)
  expect(count).toBeInTheDocument()

  fireEvent.click(text)
  await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(1))

  rerender(
    <ResultButton
      text="Users"
      count="20,000"
      active={true}
      isLoading={true}
      onClick={mockFn}
    />
  )

  const newCount = screen.queryByText(/20,000/)
  expect(newCount).not.toBeInTheDocument()
})