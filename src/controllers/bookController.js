const BookModel= require("../models/bookModel")
const UserModel= require("../models/userModel")
const publishModel = require("../models/publishModel")
const bookModel = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    let bookListed
    let author_id = book.author
    let publisher_id = book.publisher
    if (!author_id || !publisher_id) res.send ("Author and Publisher both are required")
    let isAuthorPresent = await UserModel.findOne({_id:author_id})
    let isPublisherPresent = await publishModel.findOne({_id:publisher_id})
    if (!isAuthorPresent) res.send("Invailid author Id")
    else if (!isPublisherPresent) res.send("Invailid publisher Id")
    else bookListed = await bookModel.create(book) 
    res.send({msg: savedData})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

const updateHardcover= async function (req,res) {
    let Penguin = await publishModel.findOne({name:"penguin"})
    let HarperCollins = await publishModel.findOne({name:"HarperCollins"})
    await bookModel.updateMany({publisher:Penguin._id},{$set:{isHardCover:true}})
    await bookModel.updateMany({publisher:HarperCollins._id},{$set:{isHardCover:true}})
}

const updatePrice= async function(req,res){
    let authorsWithRating = await UserModel.find({rating:{$gte:3.5}})
    let authorsId=[]
    authorsWithRating.forEach(x=>authorsId.push(x._id))
    await bookModel.updateMany({author:{$in:authorsId}},{ $inc: { price: 10 }})
}

module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.updateHardcover = updateHardcover
module.exports.updatePrice= updatePrice