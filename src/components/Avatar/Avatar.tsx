import React, { FC, useState } from 'react'
import { ShouldRender } from 'should-render'
import { Wrapper } from './AvatarStyles'
import caret from './caret.svg'
import { useGitHubUser } from './useGitHubUser'

interface Props {
  readonly logout: () => void
  readonly goBack?: () => void
}

export const Avatar: FC<Props> = (props) => {
  const { logout, goBack } = props
  const [toggle, setToggle] = useState(false)
  const { name, avatarUrl } = useGitHubUser()

  const showDropdown = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <Wrapper $open={toggle} $back={!!goBack} onClick={showDropdown}>
      <img src={avatarUrl} alt="avatar" />
      <span>{name}</span>
      <img src={caret} alt="dropdown caret" />
      <div>
        <ShouldRender if={!!goBack}>
          <button onClick={goBack}>
            Back
          </button>
        </ShouldRender>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </Wrapper>
  )
}