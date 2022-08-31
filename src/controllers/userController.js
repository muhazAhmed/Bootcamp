const userModel= require("../models/userModel")
const jwt = require("jsonwebtoken");

const createUser = async function (req, res) {
    try{
    let data = req.body;
    if (!data){
        res.status(401).send({ msg : "Please complete the body section"})
    }
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
}
catch(error){
    res.status(500).send({ error: error.message})
}
}
// ---------------------------------------------
const getUserData = async function (req,res){
    try{
    let data = req.body.userId
    let savedData = await userModel.findById(data)
    if (!savedData)
        return res.status(404).send({status : false, msg : "No such user exists"})
    res.status(200).send({status: true, msg : savedData})
}
catch(error){
    res.status(500).send({error: error.message})
}
}
// ----------------------------------------------
const loginUser = async function (req, res) {
    try{
    let userName = req.body.emailId
    let password = req.body.password

    let user = await userModel.findOne ({emailId : userName , password : password})
    if (!(userName && password)){
        return res.status(400).send({
            status : false,
            msg : "please enter user name and password"
        })
    }if (!user){
        return res.status(401) ({
            status : false,
            msg : "User name or password is incorrect"
        })
    }
    let token = jwt.sign({
        userId : user._id.toString(),
        batch : "Plutonium",
        organisation : "FunctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
    )
    res.setHeader("x-auth-token",token)
    res.status(201).send ({status : true, token : token})
    }
    catch(error){
        res.status(500).send({error : error.message})
}
}    
// --------------------------------------------

const updateUser = async function(req,res){
    try{
    let userData = req.body
    let userId = req.params.userId
    let updatedUser = await userModel.findOneAndUpdate({_id : userId}, userData)
    res.status(201).send({status : updatedUser, data : updatedUser})
}
catch(error){
    res.status(500).send({ error : error.message})
}
}
// ----------------------------------------------

const deleteUser = async function (req,res){
    try{
    let userId = req.params.userId
    let updatedUser = await userModel.findOneAndUpdate(
        {_id : userId},
        {isDeleted : true},
        {new : true}
        )
        res.status(201).send({ status : true, data : updatedUser})
}
catch(error){
    res.status(500).send({ error : error.message})
}
}


module.exports.createUser= createUser
module.exports.getUserData = getUserData
module.exports.loginUser = loginUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser