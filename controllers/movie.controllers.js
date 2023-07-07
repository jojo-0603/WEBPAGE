const db = require('../models');



const findAllMovies = async (req, res) => {
  try {
    if(req.query.status=='PUBLISHED'){
  
    const data = await   db.movie.find({published:true})
    res.json({data});
    }
    else if(req.query.status=='RELEASED'){
      const data = await   db.movie.find({released:true})
      res.json({data});
    }
    else{
      const data = await   db.movie.find({})
      res.json({data});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
const findOne=async (req,res)=>{
  var id = req.params.movieid

  const data = await   db.movie.find({movieid:id})
  res.json({data});
}
const findShows=async (req,res)=>{
  //var id = req.params.movieid

  const data = await   db.movie.find(req.query)
  res.json({data});
}
module.exports = {findAllMovies,findOne,findShows};
