const router = require('express').Router()
const movieController = require('../controllers/movieController.js')

router.post('/', movieController.create)

module.exports = router