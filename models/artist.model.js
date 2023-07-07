const mongoose= require('mongoose');
const artistSchema =new  mongoose.Schema({
    artistid:{type:Number,required:true},
    first_name:String,
    last_name:String,
    wiki_url:String,
    profile_url:String,
    movies:{type:Array}
},{ timestamps: true })
module.exports=mongoose.model('artist',artistSchema)