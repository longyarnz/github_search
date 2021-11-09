import React from 'react'
import { render, screen } from '@testing-library/react'
import { RepoResultTab } from './RepoResultTab'

it('renders the result tab with the props', () => {
  const props = {
    name: 'Owner/repo',
    description: 'Github search',
    stars: '5',
    license: 'MIT',
    language: 'Javascript',
    time: (new Date()).toISOString()
  }

  render(
    <RepoResultTab
      {...props}
    />
  )

  const name = screen.getByText(props.name)
  expect(name).toBeInTheDocument()

  const description = screen.getByText(props.description)
  expect(description).toBeInTheDocument()

  const footer = screen.getByText(/5 Stars | Javascript | MIT | Updated a few seconds ago/)
  expect(footer).toBeInTheDocument()
})