const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const publisherController = require('../controllers/publisherController')

router.post("/createAuthor", userController.createUser)
router.post("/createPublisher", publisherController.createPublisher)
router.post("/createBook", bookController.createBook)
router.get("/getBooks", bookController.getBooks)
router.put("/updateBooks", bookController.updateHardcover)
router.put("/updateBooks", bookController.updatePrice)


module.exports = router;