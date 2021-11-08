import React, { useState, useEffect } from 'react'
import { ShouldRender } from 'should-render';
import { Pages } from '../components';
import { Landing, Search, Results } from '../pages';
import { Wrapper } from './AppStyles'

export const App = () => {
  const [auth, setAuth] = useState<string>(sessionStorage.getItem('INDICINA_AUTH'))
  const [page, setPage] = useState(auth ? Pages.SEARCH : Pages.LANDING)
  const [query, setQuery] = useState(sessionStorage.getItem('SEARCH_QUERY'))

  useEffect(() => {
    auth && sessionStorage.setItem('INDICINA_AUTH', auth)
    !auth && setQuery('')
    if (!auth) setPage(Pages.LANDING)
    else if (auth && query) setPage(Pages.RESULT)
    else setPage(Pages.SEARCH)
  }, [auth, query])

  const logout = () => {
    sessionStorage.clear()
    setAuth('')
    setQuery('')
  }

  return (
    <Wrapper>
      <ShouldRender if={page === Pages.LANDING}>
        <Landing authorizeUser={setAuth} />
      </ShouldRender>

      <ShouldRender if={page === Pages.SEARCH}>
        <Search logout={logout} setSearchText={setQuery} />
      </ShouldRender>

      <ShouldRender if={page === Pages.RESULT}>
        <Results
          logout={logout}
          query={query}
          changePageTo={setPage}
          setSearchText={setQuery}
        />
      </ShouldRender>
    </Wrapper>
  )
}