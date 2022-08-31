const jwt = require("jsonwebtoken");
const userModel = require ("../models/userModel")

const authentication = async function (req,res,next){
    try{
    let token = req.headers ["x-Auth-token"]
    if (!token)
        {token = req.headers ['x-auth-token']}
    if (!token)
        {return res.status(403).send ({status : false, msg : "token is mandatory"})}
next()}
        catch(error){
            res.status(500).send({error: error.message})
        }
    }


// ----------------------------------------------
const autherization = async function (req,res,next){
    try{
    let token = req.headers ["x-Auth-token"]
    if (!token) token = req.headers ["x-auth-token"]

    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (decodedToken.userId !== req.params.userId){
        return res.status(401).send({ status: false, msg: "token is invalid" });
    }else{ next()}
    }
    catch (error){
        res.status(500).send({error: error.message})
    }        
}
// -------------------------------------------------
let params = async function (req,res,next){ 
try{   
let userId = req.params.userId;
let userDetails = await userModel.findById(userId);
if (!userDetails)
    return res.status(404)({ status: false, msg: "No such user exists" })    
    next()}    
    catch(error){
        res.status(500).send({error : error.message})
    }
}


module.exports.authentication = authentication
module.exports.autherization = autherization
module.exports.params = params