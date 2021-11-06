import React, { useState } from 'react'
import { Pages } from '../components';
import { Wrapper } from './AppStyles'

export const App = () => {
  const [page, setPage] = useState(Pages.LANDING)

  return (
    <Wrapper>

    </Wrapper>
  )
}