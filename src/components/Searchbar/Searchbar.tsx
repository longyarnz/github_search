import React, { FC, useRef } from 'react'
import { SearchbarIcon } from './SearchbarIcon'
import { Wrapper } from './SearchbarStyle'

interface Props {
  readonly width?: number
  readonly height?: number
  readonly form?: React.MutableRefObject<HTMLFormElement>
  readonly getSearchText?: (text: string) => void
}

export const Searchbar: FC<Props> = (props) => {
  const { width = 580, height = 50, form, getSearchText } = props;
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) = (event) => {
    event.preventDefault()
    getSearchText(inputRef.current?.value)
  }

  return (
    <Wrapper method="POST" onSubmit={onSubmit} $width={width} $height={height} ref={form}>
      <input
        type="text"
        name="search"
        required={true}
        autoFocus={true}
        ref={inputRef}
        placeholder="Search GitHub"
      />

      <button type="submit">
        <SearchbarIcon />
      </button>
    </Wrapper>
  )
}