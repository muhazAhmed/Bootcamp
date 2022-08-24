const express = require('express');
const router = express.Router();
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const publisherController = require('../controllers/publisherController')
const commonMW = require ('../middleware/commonMiddleware')

router.get ('/test-me', function(req,res){
    res.send('My first ever API')
})



// router.post("/createBook", bookController.createBook)


// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController)


module.exports = router;