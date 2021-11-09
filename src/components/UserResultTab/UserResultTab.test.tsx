import React from 'react'
import { render, screen } from '@testing-library/react'
import { UserResultTab } from './UserResultTab'

it('renders the result tab with the props', () => {
  const props = {
    name: 'Olalekan Ayodele',
    login: 'longyarnz',
    bio: 'I am a fullstack developer',
  }

  render(
    <UserResultTab
      {...props}
    />
  )

  const name = screen.getByText(props.name)
  expect(name).toBeInTheDocument()

  const login = screen.getByText(props.login)
  expect(login).toBeInTheDocument()

  const bio = screen.getByText(props.bio)
  expect(bio).toBeInTheDocument()
})