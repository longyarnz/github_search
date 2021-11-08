import styled from 'styled-components'

interface Props {
  readonly $loading: boolean
}

export const Wrapper = styled.div<Props>`
  ${({ $loading }) => $loading ? `
    width: 100%;
    padding: 20px;
  ` : ''}

  & > h2 {
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin: 0px 0px 25px;
  }

  & > div {
    height: max-content;
    
    & > * {
      margin-bottom: 20px;
    }
  }
`