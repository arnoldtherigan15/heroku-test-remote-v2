const { Movie } = require('../models')

class MovieController { 
    static create (req,res) {
        let { title } = req.body
        Movie.create({ title })
            .then(data => res.status(201).json({data}))
            .catch(err => res.status(500).json({err: 'internal server error'}))
    }
}

module.exports = MovieController