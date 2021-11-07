import styled from 'styled-components'

interface Props {
  readonly $open: boolean
  readonly $back?: boolean
}

export const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  border: 1px solid transparent;
  border-radius: 50px;
  padding-right: 10px;
  cursor: pointer;
  position: relative;
  transition: all .5s ease;

  & > * {
    margin: 0 5px;
  }
  
  & > img:first-of-type {
    z-index: 1;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  & > img:last-of-type {
    z-index: 1;
    transition: all .2s ease;
    ${({ $open }) => ($open ? 'transform: rotate(180deg);' : '')}
  }
  
  & > span {
    z-index: 1;
    font-size: 16px;
    color: #000000;

    &::selection {
      background-color: initial;
    }
  }
  
  & > div {
    display: flex;
    flex-direction: column;
    position: absolute;
    ${({ $open }) => (!$open ? 'display: none;' : '')}
    top: 60px;
    right: -25px;
    width: 200px;
    height: max-content;
    border-radius: 3px;
    border: 1px solid rgba(196, 203, 214, 0.3);
    box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.2);
    background: #FFF;

    & > button {
      padding-left: 25px;
      color: #FF1733;
      font-size: 16px;
      text-align: left;
      height: 50px;
      border: none;
      background-color: transparent;
      z-index: 1;
      transition: all .5s ease;
    
      &:hover {
        background-color: #F5F5F5;

        &:first-of-type::before {
          background-color: #F5F5F5;
        }
      }
    
      &:first-of-type {
        color: ${({ $back }) => ($back ? '#000000' : '#FF1733')};

        &::before {
          content: "";
          position: absolute;
          border: 1px solid rgba(196, 203, 214, 0.3);
          border-right: none;
          border-bottom: none;
          z-index: 1;
          width: 20px;
          height: 20px;
          top: -11px;
          right: 30px;
          transition: all .5s ease;
          transform: rotate(45deg);
          background: #FFF;
        }
      }
    }
  }
  `