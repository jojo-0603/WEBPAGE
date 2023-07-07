const dbConfig = require('../config/db.config')
const mongoose = require('mongoose')
const db ={};
db.mongoose=mongoose;
db.url=dbConfig.url;


db.movie = require('./movie.model.js')
db.users=require('./user.model.js')(mongoose)
db.artists=require('./artist.model.js')
db.genres = require('./genre.model.js')

module.exports=db;