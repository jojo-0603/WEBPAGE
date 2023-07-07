const express = require('express')
const router = express.Router()
const finder = require('../controllers/artist.controllers')
router.get('/artists',finder.findAllArtist)

module.exports = router;