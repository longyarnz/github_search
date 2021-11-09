import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react'
import { Avatar } from './Avatar'

const USER_DATA = {
  name: 'Olalekan Ayodele',
  avatarUrl: 'https://avatars.githubusercontent.com/u/19750988?u=68ace60e535a79d4ce130b7a9afeab57aa890db9&v=4'
}

const server = setupServer(
  rest.post('https://api.github.com/graphql', (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          viewer: USER_DATA
        }
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => {
  cleanup()
  server.close()
})

it('renders The Avatar without errors', async () => {
  const { container } = render(
    <Avatar
      logout={() => { }}
      goBack={() => { }}
    />
  )

  await waitFor(() => screen.getByText(/Olalekan Ayodele/))
  const username = screen.getByText(/Olalekan Ayodele/)
  expect(username).toBeInTheDocument()

  fireEvent.click(container)

  await waitFor(() => screen.getByText(/Logout/))
  await waitFor(() => screen.getByText(/Back/))

  const logoutButton = screen.getByText(/Logout/)
  expect(logoutButton).toBeInTheDocument()

  const goBackButton = screen.getByText(/Back/)
  expect(goBackButton).toBeInTheDocument()
})