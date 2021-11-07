import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  background-color: #E5E5E5;

  & > header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    box-shadow: 0px 0px 5px 0px #C4CBD6B2;
    background-color: #FFF;
    position: sticky;
    top: 0px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    padding: 30px calc((100% - 1000px + 10px) / 2);
  }
`