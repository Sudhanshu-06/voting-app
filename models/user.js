const mongoose = require('mongoose');
//  const bcrypt =require('bcrypt')

// Define the person Schema
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    aadharCardNumber:{
        type: Number,
        required: true,
        unquie: true
    },
    password:{
        type:String,
        enum:['voter','admin'],
        default:'voter'
    },
    isVoted:{
        type:Boolean,
        default: false
    }
});

const User = mongoose.model('User',userSchema);
module.exports = User;
