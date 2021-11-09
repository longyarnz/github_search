import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Searchbar } from './Searchbar'

it('renders the Searchbar with props', () => {
  const searchText = 'search text'

  const props = {
    getSearchText: jest.fn()
  }

  render(
    <Searchbar
      {...props}
    />
  )

  let button = screen.getByRole('button')
  expect(button).toBeInTheDocument()

  let input = screen.getByPlaceholderText('Search GitHub')
  expect(input).toBeInTheDocument()

  fireEvent.change(input, { target: { value: searchText } })
  fireEvent.click(button)

  expect(props.getSearchText).toHaveBeenCalled()
  expect(props.getSearchText.mock.calls[0][0]).toBe(searchText)
})