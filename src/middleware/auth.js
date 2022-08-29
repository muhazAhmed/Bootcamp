const jwt = require("jsonwebtoken");
const userModel = require ("../models/userModel")

const authentication = async function (req,res,next){
    let token = req.headers ["x-Auth-token"]
    if (!token)
        token = req.headers ['x-auth-token']
    if (!token)
        return res.send ({status : false, msg : "token is mandatory"})
next()   
}

// ----------------------------------------------
const autherization = async function (req,res,next){
    let token = req.headers ["x-Auth-token"]
    if (!token) token = req.headers ["x-auth-token"]

    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (decodedToken.userId !== req.params.userId){
        return res.send({ status: false, msg: "token is invalid" });
    }else{ next()
    }        
}
// -------------------------------------------------
let params = async function (req,res,next){    
let userId = req.params.userId;
let userDetails = await userModel.findById(userId);
if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" })    

else{
    next()
}    
}

module.exports.authentication = authentication
module.exports.autherization = autherization
module.exports.params = params