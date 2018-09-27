const router = require('express').Router()
const { create, getAllComment } = require('../controllers/commentController')

router
    .get('/', getAllComment)
    .post('/create', create)

module.exports = router