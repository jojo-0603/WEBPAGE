var http = require('http');
var express = require('express');
//const mongoose = require('mongoose')
var cors = require('cors')
var app = express();
const PORT = 3000;
app.use(cors())
// const dotenv = require('dotenv')
// dotenv.config({path:'./config/db.config.js'})

// app.get('/movies', function(req, res) {
//     res.write('All Movies Data in JSON format from Mongo DB');
//     res.end();
// });
// app.get('/genres', function(req, res) {
//     res.write('All Genres Data in JSON format from Mongo DB');
//     res.end();
// });
// app.get('/artists', function(req, res) {
//     res.write('All Artists Data in JSON format from Mongo DB');
//     res.end();
// });
app.use(express.json())
const db = require("./models/index");

const routmovie= require('./routes/movie.routes')
const routgenres= require('./routes/genre.routes')
const routartist= require('./routes/artist.routes')
app.use('/',routmovie)
app.use('/',routgenres)
app.use('/',routartist)
//app.use('/',rout)

db.mongoose
  .connect( 
   db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    http.createServer(app).listen(PORT, function(err) {
      if (err) console.log("Error in server setup");
      console.log(`Server listening on http://localhost:${PORT}`);
  });
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});




