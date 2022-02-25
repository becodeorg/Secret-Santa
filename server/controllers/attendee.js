const pool = require('../config/db')


// Add attendee to an event
async function insertAttendee(req, res) {
    const { name, firstname, email } = req.body

    try {
        const insert = await pool.query(
            'INSERT INTO attendees (name, firstname, email, hasDraw, receiver, hasBeenDraw) VALUES ($1, $2, $3, $4, $5, $6)', [name, firstname, email, false, "", false]
        );
        res.status(200).send(insert)
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Internal Server Error" })
    }
}

// Get all atttendees for an event
async function getEvent(req, res) {
    try {
        const event = await pool.query(
            'SELECT * FROM attendees'
        );
        res.status(200).send(event.rows)
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Internal Server Error" })
    }
}

// Get receiver
async function getReceiver(req, res) {
    const { name, firstname } = req.body
    try {
        const event = await pool.query(
            'SELECT * FROM attendees WHERE NOT (name=($1) AND firstname=($2)) AND hasBeenDraw=false', [name, firstname]
        );
        res.status(200).send(event.rows)
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Internal Server Error" })
    }
}

// Update receiver/user info
async function updateInfo(req, res) {
    console.log(req.body);
    const receiver = req.body.data.receiver
    const user = req.body.data.user

    try {
        const updateReceiver = await pool.query(
            'UPDATE attendees SET hasBeenDraw=true WHERE id=($1)', [receiver.id]
        );
        const updateUser = await pool.query(
            'UPDATE attendees SET hasDraw=true WHERE (name=($1) AND firstname=($2))', [user.name, user.firstname]
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