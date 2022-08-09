const express = require("express")
const app = express();


app.get('/movies',(req,res)=>{  
    res.send(["batman","avengers","naruto","devil academy"])
})


app.get('/movies/:indexNumber',(req,res)=>{
    let movies = ['Rang De Basanti','The shining','Batman begins']
    console.log(req.params.indexNumber);
    let movieIndex = req.params.indexNumber

    let requiredMovie =  movies[movieIndex]
    res.send(requiredMovie)
})

app.get('/movies/:indexNumber',(req,res)=>{
    let movies = ['Rang De Basanti','The shining','Batman begins']
    console.log(req.params.indexNumber);
    let movieIndex = req.params.indexNumber
    if (movieIndex<0 || movieIndex>=movies.length){
        return res.send('The index value is wrong')
    }
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

app.get('/films', function(req,res){
    let films = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
    res.send(films)   
})

app.get('/films/:filmId', function(req,res){
    let films = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
    let filmId = req.params.filmId
    for(i = 0; i< films.length; i++){
        let movie = films[i]
        if(movie.id == filmId){
            return res.send(movie)
        }
    }res.send('Wrong id')
})       
app.listen(3000)