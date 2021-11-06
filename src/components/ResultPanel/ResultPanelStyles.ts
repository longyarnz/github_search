import styled from 'styled-components'

export const Wrapper = styled.div`
  & > h2 {
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin: 0px 0px 25px;
  }

  & > div > * {
    margin-bottom: 20px;
  }
`