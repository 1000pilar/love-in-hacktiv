var express = require('express')
var router = express.Router()
var usersController = require('../controllers/user-cont.js')
var passport = require('passport')
var helper = require('../helpers/jwtVerify.js')


router.post('/signup', usersController.signup)
router.post('/signin', passport.authenticate('local', { session: false }), usersController.signin)
router.get('/list', helper.jwtVerify, usersController.read)
router.delete('/delete/:id', helper.jwtVerify, usersController.delete)


module.exports = router
