const express = require('express');
const router = express.Router();
// const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookController")
const BookController = require("../models/bookModel")

router.post ('/createBook', bookController.createBook)
req.post('/createAuther', bookController.createAthorData)

module.exports = router;