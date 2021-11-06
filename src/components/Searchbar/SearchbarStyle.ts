import styled from 'styled-components'

interface Props {
  readonly $width: number;
  readonly $height: number;
}

export const Wrapper = styled.form<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  padding: 16px;
  border-radius: 100px;
  border: 1px solid #C4C4C4;
  transition: all .2s ease;

  &:focus-within {
    border-color: #5C5C5C;
  }

  & > input {
    height: 18px;
    width: calc(100% - 32px);
    border: none;
    background-color: transparent;

    &:focus-visible {
      border: none;
      outline: none;
    }
  }
  
  & > button {
    width: 18px;
    height: 18px;
    padding: 0px;
    border: none;
    background-color: transparent;

    & > img {
      width: 100%;
    }
  }
`