import React from 'react'
import { render, screen } from '@testing-library/react'
import { ResultPanel } from './ResultPanel'
import { ResultType } from '../types'

it('renders the ResultPanel with props', () => {
  const props = {
    type: ResultType.USER,
    resultIsUserType: true,
    count: 1,
    list: [{
      name: 'Olalekan Ayodele',
      login: 'longyarnz',
      bio: 'Software Engineer'
    }],
    isFetching: false
  }

  const { rerender } = render(
    <ResultPanel
      {...props}
    />
  )

  let header = screen.getByText(`${props.count} ${props.type} result`)
  expect(header).toBeInTheDocument()

  let name = screen.getByText(props.list[0].name)
  expect(name).toBeInTheDocument()

  rerender(
    <ResultPanel
      {...props}
      isFetching={true}
      list={[]}
    />
  )

  const title = screen.getByText('Searching GitHub...')
  expect(title).toBeInTheDocument()
  header = screen.queryByText(`${props.count} ${props.type} result`)
  expect(header).not.toBeInTheDocument()
  name = screen.queryByText(props.list[0].name)
  expect(name).not.toBeInTheDocument()
})