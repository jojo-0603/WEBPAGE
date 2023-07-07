const mongoose= require('mongoose');
const usersSchema=new mongoose.Schema({
    userid:{type:Number,required:true},
    email:String,
    first_name:String,
    last_name:String,
    username:String,
    contact:String,
    password:{type:String,required:true},
    role:String,
    isLoggedIn:Boolean,
    uuid:{type:String,required:true},
    accesstoken:String,
    coupens:[{
      id:{type:String,required:true},
      discountValue:Number,


    }],
    bookingRequests:[{
        reference_number:{type:Number,required:true},
        coupon_code:Number,
        show_id:Number,
        tickets:[{type:Number}]
    }]

})
module.exports=mongoose.model('user',usersSchema)