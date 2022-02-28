const pool = require('../config/db')
const { Client } = require('pg')


// Add attendee to an event
async function insertAttendee(req, res) {
    const { lastname, firstname, email } = req.body

    try {
        const client = new Client()
        await client.connect()
        const data = await client.query(
            'INSERT INTO public."secret-santa" ("firstname", "lastname", "email", "hasDraw", "receiver", "hasBeenDraw") VALUES ($1, $2, $3, $4, $5, $6)', [lastname, firstname, email, false, "", false]
        )
        res.send(data.rows);
        await client.end()
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Internal Server Error" })
    }
}

// Get all atttendees for an event
async function getEvent(req, res) {
    try {
        const client = new Client()
        await client.connect()
        const data = await client.query(
            'SELECT * from public."secret-santa";'
        )
        res.send(data.rows);
        await client.end()
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Internal Server Error" })
    }
}

// Get receiver
async function getReceiver(req, res) {
    const { lastname, firstname } = req.body
    try {
        const client = new Client()
        await client.connect()
        console.log(req);
        const data = await client.query(
            'SELECT * from public."secret-santa" WHERE NOT ("lastname"=($1) AND "firstname"=($2)) AND "hasBeenDraw"=false;', [lastname, firstname]
        )
        res.send(data.rows);
        await client.end()
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Internal Server Error" })
    }
}

// Update receiver/user info
async function updateInfo(req, res) {
    const receiver = req.body.data.receiver
    const user = req.body.data.user

    try {
        const client = new Client()
        await client.connect()
        const data = await client.query(
            'UPDATE public."secret-santa" SET "hasBeenDraw"=true WHERE "id"=($1);', [receiver.id],
            'UPDATE public."secret-santa" SET "hasDraw"=true WHERE ("name"=($1) AND "firstname"=($2))', [user.lastname, user.firstname]
        )
        res.send(data.rows);
        await client.end()
        const updateUser = await pool.query(

        );
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Internal Server Error" })

    }

}

module.exports.getEvent = getEvent
module.exports.insertAttendee = insertAttendee
module.exports.getReceiver = getReceiver
module.exports.updateInfo = updateInfo