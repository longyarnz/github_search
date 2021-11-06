import React, { FC } from 'react'
import { GitHubButton, PageInterface, Pages } from '../../components'
import { Wrapper } from './LandingStyles'

interface Props extends PageInterface {
}

export const Landing: FC<Props> = (props) => {
  const { changePageTo } = props

  const login = () => {
    changePageTo(Pages.SEARCH)
  }

  return (
    <Wrapper>
      <GitHubButton text="Login to GitHub" onClick={login} />
    </Wrapper>
  )
}