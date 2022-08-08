const express = require("express")
const app = express();


app.get('/movies',(req,res)=>{  
    res.send(["batman","avengers","naruto","devil academy"])
})


app.listen(3000)