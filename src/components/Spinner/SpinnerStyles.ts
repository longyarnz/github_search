import styled from 'styled-components'

interface Props {
  readonly $size?: number
  readonly $thickness?: number
  readonly $color?: string
}

export const Wrapper = styled.span<Props>`
  @keyframes spin{
    0%{
      transform:rotate(0deg)
    }
    to{
      transform:rotate(360deg)
    }
  }

  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  display: inline-block;
  border: ${({ $thickness }) => $thickness}px solid ${({ $color }) => $color};
  border-radius: 50%;
  border-right-color: transparent;
  padding: 0px;
  animation: spin .45s infinite linear;
`