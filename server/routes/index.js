const express = require('express')
const router = express.Router()
const { signup, signin, getAllUser, getOne } = require('../controllers/userController')
// const upload = require('../helpers/uploadHelper')

router.post('/signup', signup)
router.post('/signin', signin)
// get all user
router.get('/users', getAllUser)
router.post('/user/:id', getOne)

module.exports = router
