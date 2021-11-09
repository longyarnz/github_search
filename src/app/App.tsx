import React, { useState, useEffect } from 'react'
import { ShouldRender } from 'should-render';
import { Pages } from '../components';
import { Landing, Search, Results } from '../pages';
import { Wrapper } from './AppStyles'

export const App = () => {
  const intialAuth = sessionStorage.getItem('INDICINA_AUTH') ?? ''
  const intialQuery = sessionStorage.getItem('SEARCH_QUERY') ?? ''
  const [auth, setAuth] = useState(intialAuth)
  const [query, setQuery] = useState(intialQuery)
  const [page, setPage] = useState(auth ? Pages.SEARCH : Pages.LANDING)

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