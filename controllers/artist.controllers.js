const db = require('../models');
const findAllArtist = async (req,res)=>{
    try{
        const data = await   db.artists.find({})
    res.json({data});

    }catch(err){
 console.error(err);
    res.status(500).send('Internal Server Error');

    }
}
module.exports={findAllArtist}