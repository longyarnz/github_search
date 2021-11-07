import React, { FC } from 'react'
import { ShouldRender } from 'should-render';
import { Spinner } from '../Spinner';
import { Wrapper } from './ResultButtonStyles'

interface Props {
  readonly text: string
  readonly count: string
  readonly active: boolean
  readonly isLoading: boolean
  readonly onClick?: () => void
}

export const ResultButton: FC<Props> = (props) => {
  const { text, count, active, onClick, isLoading } = props

  return (
    <Wrapper $isActive={active} onClick={onClick}>
      <span>{text}</span>
      <span>
        <ShouldRender if={isLoading}>
          <Spinner
            size={10}
            thickness={2}
            color="#000"
          />
        </ShouldRender>
        <ShouldRender if={!isLoading}>
          {count}
        </ShouldRender>
      </span>
    </Wrapper>
  )
}