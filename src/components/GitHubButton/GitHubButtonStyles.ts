import styled from 'styled-components'

export const Wrapper = styled.div`
  & > button {
    width: 180px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5C5C5C;
    color: #FFFFFF;
    border: 1px solid #5C5C5C;
    font-weight: 700;
    position: relative;
    overflow: hidden;

    & > span {
      z-index: 1;
      transition: all .3s ease-out;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: #4C4C4C;
      clip-path: circle(0px at center);
      transition: all .3s ease-out;
    }
    
    &:hover {
      &::before {
        clip-path: circle(100% at center);
      }
    }
    
    &:active {
      &::before {
        background-color: #5C5C5C;
      }
    }
  }
`