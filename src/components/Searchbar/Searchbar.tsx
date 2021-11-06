import React, { FC, useRef } from 'react'
import { SearchbarIcon } from './SearchbarIcon'
import { Wrapper } from './SearchbarStyle'

interface Props {
  readonly width?: number
  readonly height?: number
}

export const Searchbar: FC<Props> = (props) => {
  const { width = 580, height = 50 } = props;
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) = (event) => {
    event.preventDefault()
    console.log(inputRef.current?.value)
  }

  return (
    <Wrapper method="POST" onSubmit={onSubmit} $width={width} $height={height}>
      <input
        type="text"
        name="search"
        required={true}
        autoFocus={true}
        ref={inputRef}
      />

      <button type="submit">
        <SearchbarIcon />
      </button>
    </Wrapper>
  )
}