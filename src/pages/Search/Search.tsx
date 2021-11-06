import React, { FC } from 'react'
import { Avatar, GitHubButton, GitLogo, PageInterface, Pages, Searchbar } from '../../components'
import { Wrapper } from './SearchStyles'

interface Props extends PageInterface {
  readonly setSearchText?: React.Dispatch<React.SetStateAction<string>>
}

export const Search: FC<Props> = (props) => {
  const { changePageTo } = props

  const startSearch = () => {
    changePageTo(Pages.RESULT)
  }
  
  const logout = () => {
    changePageTo(Pages.LANDING)
  }

  return (
    <Wrapper>
      <header>
        <Avatar logout={logout} />
      </header>
      <div>
        <GitLogo />
        <Searchbar />
        <GitHubButton text="Search GitHub" onClick={startSearch} />
      </div>
    </Wrapper>
  )
}