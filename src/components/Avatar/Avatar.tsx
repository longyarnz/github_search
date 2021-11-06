import React, { FC, useState } from 'react'
import { ShouldRender } from 'should-render'
import { Wrapper } from './AvatarStyles'
import caret from './caret.svg'
import dummy from './dummy_avatar.png'

interface Props {
  readonly name?: string;
  readonly picture?: string;
  readonly logout: () => void
  readonly goBack?: () => void
}

export const Avatar: FC<Props> = (props) => {
  const { picture = dummy, name = 'John Doe', logout, goBack } = props
  const [toggle, setToggle] = useState(false)

  const showDropdown = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <Wrapper $open={toggle} $back={!!goBack} onClick={showDropdown}>
      <img src={picture} alt="User profile avatar" />
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