import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { render, screen } from '@testing-library/react'
import { useErrorHandler } from './useErrorHandler'

test('should increment counter', async () => {
  const error = 'Testing Error'
  const { result } = renderHook(() => useErrorHandler(''))

  act(() => {
    result.current.setError(error)
  })

  render(
    <result.current.Banner>
      Error Children
    </result.current.Banner>
  )

  const errorText = screen.getByText(error)
  expect(errorText).toBeInTheDocument()
})