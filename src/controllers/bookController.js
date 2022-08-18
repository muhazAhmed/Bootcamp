const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAthorData= async function (req, res) {
    let authorData = req.body
    let finalAutherData = await bookModel.create(authorData)
    res.send({msg: finalAutherData})
}

const getBooksData = async function(req,res){
    let allBooks = await BookModel.autherModel.findOne({author_name : "Chethan Bhagat"}).select({author_id: 1, _id: 0})
    let list = await BookModel.find(allBooks)
    res.send({msg: list})
}
const getAutherName = async function(req,res){
    let allAuthor = await BookModel.bookModel.findOneAndUpdate({name: "Two States"},{$set: {price: 100}},{new: true})
    let getAuthors = await BookModel.autherModel.findOne({author_id : allAuthor.author_id}).select({author_name: 1,_id: 0})
    req.send({msg: allAuthor,author_name: getAuthors.author_name})
}

const getAuthorByPrice = async function(req,res){
    let allAuthor = await BookModel.bookModel.find({price:{$gte: 50, $lte: 100}})
    let result = allAuthor.map(x => x.author_id)
    let newAuthor = await (await BookModel.autherModel.find({author_id:result})).select({author_name: 1, _id: 0})
    res.send({msg: newAuthor})
}

module.exports.createBook= createBook
module.exports.createAthorData= createAthorData
module.exports.getBooksData= getBooksData
module.exports.getAutherName=getAutherName
module.exports.getAuthorByPrice=getAuthorByPrice
