const userModel= require("../models/userModel")
const jwt = require("jsonwebtoken");

const createUser = async function (req, res) {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.send({ msg: savedData });
};
// ---------------------------------------------
const getUserData = async function (req,res){
    let data = req.body
    let savedData = await userModel.create(data)
    res.send({msg : savedData})
}
// ----------------------------------------------
const loginUser = async function (req, res) {
    let userName = req.body.emailId
    let password = req.body.password

    let user = await userModel.findOne ({emailId : userName , password : password})
    if (!(userName && password)){
        return res.send({
            status : false,
            msg : "please enter unser name and password"
        })
    }if (!user){
        return res.send ({
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
    res.send ({status : true, token : token})
}    
// --------------------------------------------

const updateUser = async function(req,res){
    let userData = req.body
    let userId = req.params.userId
    let updatedUser = await userModel.findOneAndUpdate({_id : userId}, userData)
    res.send({status : updatedUser, data : updatedUser})
}
// ----------------------------------------------

const deleteUser = async function (req,res){
    let userId = req.params.userId
    let updatedUser = await userModel.findOneAndUpdate(
        {_id : userId},
        {isDeleted : true},
        {new : true}
        )
        res.send({ status : true, data : updatedUser})
}
module.exports.createUser= createUser
module.exports.getUserData = getUserData
module.exports.loginUser = loginUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser