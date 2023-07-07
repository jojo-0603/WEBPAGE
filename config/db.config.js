const { MongoClient } = require('mongodb');
//const { movies } = require('../models');
const url = 'mongodb+srv://johan:'+encodeURIComponent("#johan@john")+'@cluster0.y0gbfx4.mongodb.net/moviesdb';
const client = new MongoClient(url);
const dbName = "moviesdb";
async function main() {
    // Use connect method to connect to the server
    let result =await client.connect();
    console.log('Connected successfully to server');
    const dbs = result.db(dbName);
    const movie = dbs.collection('movies');
    const genre = dbs.collection('genres');
    const artist = dbs.collection('artists');
   
  
    // the following code examples can be pasted here...
  module.exports ={movie,genre,artist}
  
    return 'done.';
  }
  
  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
module.exports={url,client}
