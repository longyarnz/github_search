import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 680px;
  height: 85px;
  border-radius: 3px;
  background-color: #FFFFFF;

  & > div {
    color: #91929E;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:last-of-type {
      margin-top: auto;
    }

    & > span:first-of-type {
      color: #000000;
      font-weight: 700;
      font-size: 16px;
      margin-right: 10px;
    }
    
    & > span:last-of-type {
      font-size: 14px;
    }

    &:last-of-type, & > span:last-of-type {
      font-size: 12px;
    }
  }
`