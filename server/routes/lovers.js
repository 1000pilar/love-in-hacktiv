var express = require('express')
var router = express.Router()
var loversController = require('../controllers/lovers-cont.js')


router.post('/history/create', loversController.create)
router.get('/history/read/:id', loversController.read)
router.delete('/history/delete/:id', loversController.delete)



module.exports = router
