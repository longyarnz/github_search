import React, { useState, useEffect } from 'react'
import { ShouldRender } from 'should-render';
import { Pages } from '../components';
import { Landing, Search, Results } from '../pages';
import { Wrapper } from './AppStyles'

export const App = () => {
  const [auth, setAuth] = useState<string>(sessionStorage.getItem('INDICINA_AUTH'))
  const [page, setPage] = useState(auth ? Pages.SEARCH : Pages.LANDING)

  useEffect(() => {
    sessionStorage.setItem('INDICINA_AUTH', auth)
    if (!auth) setPage(Pages.LANDING)
    else setPage(Pages.SEARCH)
  }, [auth])

  return (
    <Wrapper>
      <ShouldRender if={page === Pages.LANDING}>
        <Landing authorizeUser={setAuth} />
      </ShouldRender>

      <ShouldRender if={page === Pages.SEARCH}>
        <Search changePageTo={setPage} />
      </ShouldRender>

      <ShouldRender if={page === Pages.RESULT}>
        <Results changePageTo={setPage} />
      </ShouldRender>
    </Wrapper>
  )
}