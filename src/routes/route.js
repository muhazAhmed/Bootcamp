const express = require('express');
const abc = require('../introduction/intro')
const ass4 = require('../lodash/chunk')
const ass5 = require('../lodash/tail')
const ass6 = require('../lodash/union')
const ass7 = require('../lodash/fromParis')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    ass4.chunk
    ass5.tail
    ass6.union
    ass7.fromParis
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason