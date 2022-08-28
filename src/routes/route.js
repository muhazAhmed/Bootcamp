const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController')
const auth = require ('../middleware/auth')
const userSchema = require ('../models/userModel')


router.get ('/test-me', function(req,res){
    res.send('My first ever API')
})

router.post ('/createUser', userController.createUser)

router.get ('/getUserData', userController.getUserData)

router.post ('/login', userController.loginUser)

router.get("/users/:userId",auth.validation ,userController.getUserData)

router.put("/users/:userId",auth.validation, userController.updateUser)

router.delete('/users/:userId',auth.validation,userController.deleteUser)

module.exports = router;