import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 0px calc((100% - 1000px + 10px) / 2) 30px;

  ul {
    margin: 0px;
    display: flex;
    align-items: center;

    li {
      width: max-content;
      height: 40px;
      list-style: none;
      color: #B0B7C3;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0px 2px;
      
      &.selected {
        color: #000000;
      }

      &.previous, &.next {
        width: 40px;
        border-radius: 10px;
        background-color: #000000;
        
        &.disabled {
          background-color: #F3F3F3;

          & svg > path {
            fill: #B0B7C3 !important;
          }
        }

        &.previous {
          transform: rotate(90deg);
        }
        
        &.next {
          transform: rotate(270deg);
        }
      }

      &:nth-last-of-type(2) {
        pointer-events: none;
        opacity: .2;
      }
      
      a {
        font-family: 'inter';
        font-weight: 500;
        padding: 10px;
      }
    }
  }
`