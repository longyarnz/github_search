import React, { FC } from 'react'
import { Wrapper } from './SpinnerStyles'

interface Props {
  readonly size?: number
  readonly thickness?: number
  readonly color?: string
}

export const Spinner: FC<Props> = (props) => {
  const { size, thickness, color } = props

  return (
    <Wrapper $size={size} $thickness={thickness} $color={color} />
  )
}