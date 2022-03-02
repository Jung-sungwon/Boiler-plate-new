const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email:{
        type: String,
        trim:true, //중간에 스페이스(공백)이 있으면 자동으로 없애주는 역할.
        unique:1 // 중복되지 않게함.
    },
    password:{
        type: String,
        minlength:5
    },
    lastname:{
        type: String,
        maxlength:50
    },
    role:{
        type:Number,
        default: 0
    },
    image:String,
    token:{
        type: String
    },
    tokenExp:{
        type: Number
    }
})

const User = mongoose.model('User',userSchema);

module.exports.User = User;