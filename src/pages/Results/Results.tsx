import React, { FC } from 'react'
import { Avatar, GitLogo, ResultPanel, ResultSidebar, Searchbar, PageInterface, Pages } from '../../components'
import { Wrapper } from './ResultsStyles'

interface Props extends PageInterface {
}

export const Results: FC<Props> = (props) => {
  const { changePageTo, logout } = props

  const goBack = () => {
    changePageTo(Pages.SEARCH)
  }

  return (
    <Wrapper>
      <header>
        <GitLogo />
        <Searchbar width={380} height={40} />
        <Avatar logout={logout} goBack={goBack} />
      </header>
      <div>
        <ResultSidebar />
        <ResultPanel />
      </div>
    </Wrapper>
  )
}