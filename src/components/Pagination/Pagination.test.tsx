import React from 'react'
import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'

it('renders a previous and next buttons for pagination', () => {
  render(
    <Pagination
      count={100}
      paginate={() => { }}
    />
  )

  const page1 = screen.getByText('1')
  expect(page1).toBeInTheDocument()

  const page10 = screen.getByText('10')
  expect(page10).toBeInTheDocument()
})