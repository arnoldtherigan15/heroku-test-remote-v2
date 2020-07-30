const router = require('express').Router()
const bookController = require('../controllers/bookController')

router.post('/', bookController.create)

module.exports = router