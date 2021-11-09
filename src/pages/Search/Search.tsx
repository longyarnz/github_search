import React, { FC, useRef } from 'react'
import { Avatar, GitHubButton, GitLogo, Searchbar } from '../../components'
import { Wrapper } from './SearchStyles'

interface Props {
  readonly logout: () => void
  readonly setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export const Search: FC<Props> = (props) => {
  const { logout, setSearchText } = props
  const formRef = useRef<HTMLFormElement>(null)

  const startSearch = () => {
    formRef.current?.requestSubmit()
  }

  const getSearchText = (text: string) => {
    sessionStorage.setItem('SEARCH_QUERY', text)
    setSearchText(text)
  }
  
  return (
    <Wrapper>
      <header>
        <Avatar logout={logout} />
      </header>
      <div>
        <GitLogo />
        <Searchbar form={formRef} getSearchText={getSearchText} />
        <GitHubButton text="Search GitHub" onClick={startSearch} />
      </div>
    </Wrapper>
  )
}