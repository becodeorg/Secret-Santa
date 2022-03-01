import styled from "styled-components"

import { GlobalStyle } from './globalStyles';
import { Generator } from "./components/Generator";

const Container = styled.div`
  height: 100vh;
  padding: 2rem;
`
export const App = () => {
  return (
    <>
    <GlobalStyle/>
    
    <Container>
      <Generator/>
    </Container>
    </>
  );
}
