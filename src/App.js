import styled from "styled-components"

import { GlobalStyle } from './globalStyles';
import { Generator } from "./components/Generator";

import SecretSanta from './images/secret-santa.png'

const Container = styled.div`
  height: 100vh;
  padding: 2rem;
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2.5rem;
  color: #fff;

  img {
    width: 60%;
    @media screen and (min-width: 960px) {
      width: 25%;
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: .95rem;
  }
`

export const App = () => {
  return (
    <>
    <GlobalStyle/>
    
    <Container>
      <Header>
        <img src={SecretSanta} alt="Secret Santa" />
        <h1>It's time for Secret Santa !</h1>
        <p>Type your name and find out to whom you have to offer a gift</p> 
      </Header>

      <Generator/>
    </Container>
    </>
  );
}
