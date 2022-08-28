const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName : String,
    lastNAme : String,
    mobile : Number,
    emailId : String,
    password : String,
    gender : {
        type : String,
        enum : ['male','femal', 'other']
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    age : Number

}, { timestamps: true });


module.exports = mongoose.model('user', userSchema)