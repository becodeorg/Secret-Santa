require('dotenv').config();
const sgMail = require('@sendgrid/mail')
const { Client } = require('pg')

async function sendMail(req, res) {
    try {
        // Get info from request
        const { to, text } = req.body
        // set api key for  sendgrid
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        // find user email
        const client = new Client()
        await client.connect()
        const data = await client.query(
            'SELECT * FROM public."secret-santa" WHERE ("lastname"=$1 AND "firstname"=$2);', [to.name, to.firstname]
        )
        res.send(data.rows);
        await client.end()

        // Email
        const msg = {
            to: data.rows[0].email,
            cc: 'eric@becode.org',
            from: 'secretsanta.becode@gmail.com',
            subject: 'Secret Santa',
            text: text
        }
        // Send email
        sgMail.send(msg)
            .then(() => { console.log('mail send'), res.send("mail send") })
            .catch((error) => { console.error(error) })
    }
    catch (err) {
        res.send("error")
    }
}

module.exports = sendMail