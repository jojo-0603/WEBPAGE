const express = require('express')
const router = express.Router()
const finder = require('../controllers/genre.contollers')
router.get('/genres',finder.findAllGenres)

module.exports = router;