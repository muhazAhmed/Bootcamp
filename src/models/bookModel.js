const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    totalPages: {type: Number},
    tags: [String],
    
    stockAvailable: Boolean,
    year: {type: Number, default: 1997},
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10},
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)