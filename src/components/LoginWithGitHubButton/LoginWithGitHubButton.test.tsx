import React from 'react'
import { render, screen } from '@testing-library/react'
import { LoginWithGitHubButton } from './LoginWithGitHubButton'

it('renders a button', () => {
  render(
    <LoginWithGitHubButton
      text="Login to GitHub"
    />
  )

  const Button = screen.getByText(/Login to GitHub/)
  expect(Button).toBeInTheDocument()
})