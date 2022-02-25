const express = require('express')
const sendMail = require('../controllers/sendMail')

const router = express.Router()

// Post
router.post('/', sendMail)

module.exports = router