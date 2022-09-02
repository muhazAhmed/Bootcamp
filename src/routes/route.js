const express = require('express');
const router = express.Router();
const memeController = require ('../controllers/memeController')
const cowinController = require ('../controllers/cowinController')
const weatherController = require ('../controllers/weatherController')
// const auth = require ('../middleware/auth')
// const userSchema = require ('../models/userModel')


router.get ('/test-me', function(req,res){
    res.send('My first ever API')
})

router.get("/cowin/states", cowinController.getStates)
router.get("/cowin/districtsInState/:stateId", cowinController.getDistrict)
router.get("/cowin/getByPin", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)

router.get("/cowin/getByDistrict", cowinController.getByDistrict) 


// >>>>>>>>>>>>>>>>>>>>>> weather apis <<<<<<<<<<<<<<<<<<<<<<<<<<
router.get("/getweather", weatherController.getWeather)
router.get("/gettemp", weatherController.getTemp)
router.get("/getcitytemp", weatherController.getcityTemp)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> memes apis <<<<<<<<<<<<<<<<<<<<<<<
router.get("/getmemes", memeController.getmemes)
router.post("/postmemes", memeController.postmeme)

module.exports = router;

module.exports = router;