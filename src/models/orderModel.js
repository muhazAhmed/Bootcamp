const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    user_id :{
        type : ObjectId,
        ref : "user"
    },
    product_id : {
        type : ObjectId,
        ref : "product"
    },
    amount : Number,
    isFreeAppUser : String,
    date : String
},
{timestamps : true})

module.exports = mongoose.model('order', orderSchema)