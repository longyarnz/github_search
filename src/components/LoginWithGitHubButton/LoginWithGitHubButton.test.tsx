import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { LoginWithGitHubButton } from './LoginWithGitHubButton'

it('renders a button', () => {
  render(
    <LoginWithGitHubButton
      text="Login to GitHub"
    />
  )

  const Button = screen.getByText(/Login to GitHub/)
  expect(Button).toBeInTheDocument()

  globalThis.open = jest.fn()
  fireEvent.click(Button)
  fireEvent.click(Button)
  expect(globalThis.open).toHaveBeenCalledTimes(2)
  globalThis.open.mockClear()
})