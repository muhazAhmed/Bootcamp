const mongoose = require('mongoose');
const autherSchema = new mongoose.Schema({
    auther_id:{
        type: Number.EPSILON,
        require: true
    },
    auther_name : String,
    age : Number,
    address : String
},
{timestamps : true})

const bookModel = new mongoose.mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    auther_id : Number,
    price : Number,
    ratings : Number
},
{timestamps : true})

module.exports.autherModel = mongoose.model('author', authorSchema)
module.exports.bookModel = mongoose.model('book1',bookSchema1)