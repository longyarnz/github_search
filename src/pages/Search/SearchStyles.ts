import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  & > header {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: end;
    padding: 15px 40px;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10%;

    & > * {
      margin: 20px 0px;
    }
  }
`