import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Attendee() {
  const [name, setName] = useState({ name: "", firstname: "" })
  const [receiver, setReceiver] = useState()

  useEffect(() => {
    axios.get("http://localhost:9000/api/attendee")
      .then(res => console.log(res.data))
  }, [])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getReceiver() {
    console.log(name);
    axios.post("http://localhost:9000/api/attendee/receiver", name)
      .then(res => {
        setReceiver(res.data[getRandomInt(res.data.length)])
        // axios.put("http://localhost:9000/api/attendee", { data: { receiver: receiver, user: name } })
        //   .then(res => console.log(res))
        //   .catch(err => console.log(err))
        axios.post("http://localhost:9000/api/mail", { to: name, text: `You have draw ${receiver.firstname + " " + receiver.name}` })
          .then(res => console.log(res))
          .catch(err => console.log(err))

      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <input type="text" onChange={e => setName({ ...name, name: e.target.value })} />
      <input type="text" onChange={e => setName({ ...name, firstname: e.target.value })} />
      <button onClick={() => getReceiver()}>submit</button>
      {receiver && <p>You have draw {receiver.firstname + " " + receiver.name}</p>}
    </div>
  )
}
