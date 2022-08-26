const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController')
const orderController = require ('../controllers/orderController')
const userController = require ('../controllers/userController')
const middleware = require ('../middleware/commonMiddleware')


router.get ('/test-me', function(req,res){
    res.send('My first ever API')
})

router.post('/createUser',middleware.header , userController.createUser)

router.get ('/getUser', userController.getUserData)

router.post('/createProduct',productController.createProduct)

router.post('/createOrder',middleware.header,orderController.createOrder)

module.exports = router;