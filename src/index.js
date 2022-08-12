const express = require("express")
const app = express();

// app.use(express.json())
let persons = [
    {
        "name" : "PK",
        "age" : 10,
        "votingStatus" : "false" 
    },
    {
        "name" : "SK",
        "age" : 20,
        "votingStatus" : "false"
    },
    {
        "name" : "AA",
        "age" : 70,
        "votingStatus" : "false"
    },
    {
        "name" : "SC",
        "age" : 5,
        "votingStatus" : "false"
    },
    {
        "name" : "HO",
        "age" : 40,
        "votingStatus" : "false"
    }
]
app.post('/persons', function(req,res){
    let container = []
    let eligible = req.query.inputAge
    for(i = 0; i < persons.length;i++){
        let newAge = persons[i].age
        if(newAge > eligible
            ){
            persons[i].votingStatus = true;
        }
        // console.log(newAge);
    }  
    container = persons.filter((person) => person.age > eligible) 
    console.log(eligible);
    res.send(container)
})

app.listen(3000)