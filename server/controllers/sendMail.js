const dotenv = require('dotenv').config();
const sgMail = require('@sendgrid/mail')
const pool = require('../config/db')

async function sendMail(req, res) {
    try {
        // Get info from request
        const { to, text } = req.body
        // set api key for  sendgrid
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        // find user email
        const user = await pool.query(
            'SELECT * FROM attendees WHERE (name=$1 AND firstname=$2);', [to.name, to.firstname]
        );

        // Email
        const msg = {
            to: user.rows[0].email,
            cc: 'dylanrichardson1606@gmail.com',
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