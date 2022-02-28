const express = require('express')
const cors = require('cors')
const mail = require('./routes/mail')
const attendee = require('./routes/attendee')

const app = express()
const port = process.env.PORT | 9000

// Midlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.get("/", (req, res) => res.send({ info: "Welcome!" }));
app.use("/api/mail", mail)
app.use("/api/attendee", attendee)


app.listen(port, () => {
    console.log(`Connected on http://localhost:${port}/`)
})