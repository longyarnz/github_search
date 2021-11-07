import styled from 'styled-components'

interface Props {
  readonly $isActive: boolean
}

export const Wrapper = styled.button<Props>`
  width: 220px;
  height: 40px;
  background-color: ${({$isActive}) => ($isActive ? '#F7F7F8' : 'transparent')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #5C5C5C;
  border: none;
  border-radius: 3px;

  &:focus-visible {
    border: none;
    outline: none;
  }

  & > span:first-of-type{
    font-size: 14px;
  }

  & > span:last-of-type{
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    min-width: 40px;
    padding: 0px 10px;
    height: 20px;
    background-color: #DCDCDF;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 700;
  }
`