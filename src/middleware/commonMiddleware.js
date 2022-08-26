const header = function(req,res,next){
    let { is_Free_App_User} = req.headers
    if (is_Free_App_User == undefined ){
        res.send("Request is missing a heading")
    } else {
        req.isFreeAppUser = Boolean(is_Free_App_User)
        next()
    }
}

module.exports.header = header