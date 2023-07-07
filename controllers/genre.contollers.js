const db = require('../models');
const findAllGenres = async (req,res)=>{
    try{
        const data = await   db.genres.find({})
    res.json({data});

    }catch(err){
 console.error(err);
    res.status(500).send('Internal Server Error');

    }
}
module.exports={findAllGenres}