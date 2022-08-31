const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController')
const auth = require ('../middleware/auth')
const userSchema = require ('../models/userModel')


router.get ('/test-me', function(req,res){
    res.send('My first ever API')
})

router.post ('/createUser', userController.createUser)

router.post ('/login', userController.loginUser)

router.get("/users/:userId",auth.authentication,auth.autherization,auth.params,userController.getUserData)

router.put("/users/:userId",auth.authentication,auth.autherization,auth.params,userController.updateUser)

router.delete('/users/:userId',auth.authentication,auth.autherization,auth.params,userController.deleteUser)

module.exports = router;