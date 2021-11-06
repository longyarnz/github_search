import React, { useState } from 'react'
import { ShouldRender } from 'should-render';
import { Pages } from '../components';
import { Landing } from '../pages';
import { Wrapper } from './AppStyles'

export const App = () => {
  const [page, setPage] = useState(Pages.LANDING)

  return (
    <Wrapper>
      <ShouldRender if={page === Pages.LANDING}>
        <Landing changePageTo={setPage} />
      </ShouldRender>

    </Wrapper>
  )
}