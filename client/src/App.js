import "bulma/css/bulma.css"
import styled from "styled-components"

import { GlobalStyle } from './globalStyles';
import { EventForm } from "./components/EventForm/EventForm";

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

  .title {
    color: #fff;
  }

  img {
    width: 60%;
    @media screen and (min-width: 960px) {
      width: 30%;
    }
  }

  p {
    margin-top: -1rem;
  }
`
const Subtitle = styled.h2`
  color: #fff;
  font-weight: 700;

  &.subtitle {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 960px) {
    width: 60%;
    margin: 0 auto;
  }
}
`

export const App = () => {
  return (
    <>
    <GlobalStyle/>
    
    <Container className="container">
      <Header>
        <img src={SecretSanta} alt="Secret Santa" />
        <h1 className="title">It's time for Secret Santa !</h1>
        <p className="content">Try out the Secret Santa name generator</p>
      </Header>

      <Subtitle className="subtitle">Step 1 - Create your event</Subtitle>

      <EventForm/>
    </Container>
    </>
  );
}
