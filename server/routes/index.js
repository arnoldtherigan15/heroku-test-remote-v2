const router = require('express').Router()
const bookRouter = require('./bookRoutes')
const movieRouter = require('./movieRouter')
router.use('/books', bookRouter)
router.use('/movies', movieRouter)

module.exports = router