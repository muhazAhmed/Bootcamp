const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    // let allBooks= await BookModel.find(  { bookName : "i" }  )
    let allBooks= await BookModel.find(  { year : 1999 }  )
    // let allBooks= await BookModel.find( {"price.indianPrice":{$in: [350, 550]} })
    // let allBooks= await BookModel.find( { $or: [ { totalPages: 500 }, { stockAvailable: true } ] } )
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData