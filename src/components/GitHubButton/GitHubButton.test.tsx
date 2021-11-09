import React from 'react'
import { render, screen } from '@testing-library/react'
import { GitHubButton } from './GitHubButton'

it('renders a button', () => {
  render(
    <GitHubButton
      text="Search"
    />
  )

  const Button = screen.getByText(/Search/)
  expect(Button).toBeInTheDocument()
})