const express = require('express')
const router = express.Router()
const { create, remove, getAllTimeline } = require('../controllers/timelineController')

router
    .post('/create/:id', create)
    .delete('/remove/:id', remove)
    .get('/', getAllTimeline)

module.exports = router