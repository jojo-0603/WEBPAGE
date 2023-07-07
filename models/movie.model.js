const mongoose= require('mongoose');
const moviesSchema = new mongoose.Schema({
    movieid:{type:Number,required:true},
    title:String,
    published:Boolean,
    released:Boolean,
    poster_url:String,
    release_date:Date,
    publish_date:Date,
    artists:[{
        artistid:{type:Number,required:true},
        first_name:String,
        last_name:String,
        wiki_url:String,
        profile_url:String,
        movies:{type:Array}
 } ],
    genres:[{type:String}],
    duration:Number,
    critic_rating:Number,
    trailer_url:String,
    wiki_url:String,
    story_line:String,
    shows:[{
        id:{type:Number,required:true},
        theatre:{name:String,city:String},
        language:String,
        show_timing:Date,
        available_seats:String,
        unit_price:Number

    }]
 
},{timestamps:true})
module.exports=mongoose.model("movie",moviesSchema);