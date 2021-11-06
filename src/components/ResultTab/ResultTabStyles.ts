import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 680px;
  height: 115px;
  border-radius: 3px;
  background-color: #FFFFFF;

  & > div {
    color: #91929E;
    font-size: 12px;

    &:first-of-type {
      color: #000000;
      font-weight: 700;
      font-size: 16px;
    }

    &:last-of-type {
      margin-top: auto;
    }
  }
`