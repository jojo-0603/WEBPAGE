const mongoose= require('mongoose');
const GenreSchema=new mongoose.Schema({
    genreid:{type:Number,required:true},
    genre:String
},{timestamps:true})
module.exports=mongoose.model('genre',GenreSchema)