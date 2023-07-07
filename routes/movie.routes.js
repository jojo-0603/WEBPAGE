const express = require('express')
const router = express.Router()
const finder = require('../controllers/movie.controllers')
//router.get('/',finder.AllMovies)
router.get('/movie',finder.findAllMovies)
router.get('/movie',finder.findShows)
router.get('/movie/:movieid',finder.findOne)
//router.get('/status',finder.findAllMovies)


module.exports = router;