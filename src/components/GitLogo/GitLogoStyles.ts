import styled from 'styled-components'

interface Props {
  readonly $width: number;
}

export const Wrapper = styled.img<Props>`
  width: ${({ $width }) => $width}px;
`