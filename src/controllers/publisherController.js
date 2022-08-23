const publisherModel = require('../models/publishModel')

const createPublisher= async function (req, res) {
    let data= req.body
    let savedData= await publisherModel.create(data)
    res.send({msg: savedData})
}

module.exports.createPublisher= createPublisher
