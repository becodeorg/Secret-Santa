import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const Form = styled.form`
  max-width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
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
const Result = styled.div`
`

export const Generator = () => {
  const [name, setName] = useState({ lastname: "", firstname:"" })
  const [receiver, setReceiver] = useState()
    
  useEffect(() => {
      axios.get("http://localhost:9000/api/attendee")
        .then(res => console.log(res.data))
  }, [])

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
          axios.post("http://localhost:9000/api/mail", {to: receiver.email, text: `You have draw ${receiver.firstname + " " + receiver.name}`})
            .then(res => console.log(res))
            .catch(err => console.log(err))
          
    })
    .catch(err => console.log(err))
  }

  return (
    <>
        <Form>
          <Control>
            <input 
              type="text" 
              onChange={e => {setName({ ...name, firstname: e.target.value })}}
              placeholder="First name"
               />
            <label className="sr-only" htmlFor="">First name</label>
          </Control>

          <Control>
            <input 
              type="text" 
              onChange={e => {
                setName({ ...name, lastname: e.target.value })
              }}
              placeholder="Last name"
            />
            <label className="sr-only" htmlFor="">Last name</label>
          </Control>

          <SubmitBtn type="submit" onClick={getReceiver}>
            <span>Draw</span>
          </SubmitBtn>
        </Form>

        <Result>
            {receiver && <p>You have draw {receiver.firstname + " " + receiver.lastname}</p>}
        </Result>
    </>
  )
}