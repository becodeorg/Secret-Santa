const express = require('express')
const { insertAttendee, getEvent, getReceiver, updateInfo } = require('../controllers/attendee')

const router = express.Router()

// Post
router.post('/', insertAttendee)
router.post('/receiver', getReceiver)

// Get
router.get('/', getEvent)

// Put
router.put("/", updateInfo)

module.exports = router