const express = require("express")
const app = express();

app.get('/sol1', function(req,res){
    let array = [1,2,3,5,6,7]
    let count = 0
    for(i in array){
        count += array[i]
    }
    let n = array.pop()
    let consecutiveSum = n*(n+1)/2
    let missingNumber = consecutiveSum - count 

    res.send({Data : missingNumber})
})

// Solution 2

app.get('/sol2', function(req,res){
    let array = [33, 34, 35, 37, 38]
    let length = array.length
    let count = 0

    for(i in array){
        count += array[i]
    }
    let firstDigit = array[0]
    let lastDigit = array.pop()
    let sum = (length + 1)*(firstDigit + lastDigit)/2
    let missingNumber = sum - count 

    res.send({Data : missingNumber})
})

app.listen(3000)