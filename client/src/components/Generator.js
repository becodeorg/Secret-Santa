import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';

import SecretSanta from '../images/secret-santa.png'

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
    font-size: 2rem;
    @media screen and (min-width: 960px) {
      font-size: 2.5rem;
    }
    margin-bottom: 1rem;
  }

  p {
    font-size: .95rem;
  }
`
const Form = styled.form`
  max-width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
`
const Control = styled.div`
  width: 100%;
  position: relative;
  margin: .5rem 0;

  label {
    position: absolute;
    left: 10px;
    top: 10px;
    color: #333;
    font-style: italic;
    transition: all 150ms ease-out;
  }

  input {
    width: 100%;
    padding: .85rem;
    border: 2px solid #e6353f;
    border-radius: .2rem;
    outline: none;
    transition: all 200ms ease-in-out;

    &:focus {
      border-color: #17c4c4;
    }

    &:focus + label {
      transform: translateY(-125%);
      font-size: .75em;
    }
  }

  .filled {
    transform: translateY(-125%);
    font-size: .75em;
  }

`
const SubmitBtn = styled.button`
  position: relative;
  width: 100%;
  padding: .85rem;
  margin-top: .3rem;
  outline: none;
  border: 2px solid #e6353f;
  border-radius: .2rem;
  background-color: #17c4c4;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 1;
  }

  @media screen and (min-width: 960px) {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #19dfdf;
      transition: width 200ms ease-in-out;
    }

    &:hover {
      cursor: pointer;

      &::after {
        width: 100%;
      }
    }
  }
`

export const Generator = () => {
  const [name, setName] = useState({ lastname: "", firstname:"" })
  const [receiver, setReceiver] = useState()

  const getRandomInt = max => {
    return Math.floor(Math.random() * max);
  }
    
  const getReceiver =  e => {
    e.preventDefault()

    axios.post("http://localhost:9000/api/attendee/receiver", name)
      .then(res => {
        setReceiver(res.data[getRandomInt(res.data.length)])
          axios.put("http://localhost:9000/api/attendee", {data: {receiver: receiver, user: name}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
          axios.post("http://localhost:9000/api/mail", {to: receiver.email, text: `You have draw ${receiver.firstname + " " + receiver.lastname}`})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Header>
        <img src={SecretSanta} alt="Secret Santa" />
         <h1>
           {!receiver ? "It's time for Secret Santa!" : `You have drawn ${receiver.firstname}  ${receiver.lastname}`}
        </h1> 

        <p>
          {!receiver ? "Type your name and find out to whom you have to offer a gift": "An email with the person you drawn has been sent to you."}
        </p> 
      </Header>

      {!receiver && 
        (
          <Form>
            <Control>
              <input 
                type="text" 
                onChange={e => {setName({ ...name, firstname: e.target.value })}}
                placeholder="First name"
                required
                />
              <label className="sr-only" htmlFor="">First name</label>
            </Control>

            <Control>
              <input 
                type="text" 
                onChange={e => {setName({ ...name, lastname: e.target.value })}}
                placeholder="Last name"
                required
              />
              <label className="sr-only" htmlFor="">Last name</label>
            </Control>

            <SubmitBtn type="submit" onClick={(e) => getReceiver(e)}>
              <span>Draw</span>
            </SubmitBtn>
          </Form>
        )
      }
    </>
  )
}