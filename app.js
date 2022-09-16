const express = require('express');
const bodyParser = require('body-parser');
var app = express();

var urlencodedParse = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');

app.get('' || '/', function(req, res){
    res.render('home')
});
app.get('/chart-room', function(req, res){
    res.render('chart-room', {data: req.query})
});
app.post('/chart-room',urlencodedParse, function(req, res){
    var msg = req.body
    console.log(msg);
    res.render('chart-sucess', {data: req.body})
});
app.get('/profile/:name', function(req, res){
    var data = {age: 29, job: 'ninja', hobbies: ['Coding', 'Eating', 'Reading']};
    res.render('profile', {person: req.params.name, data: data})
});
app.listen(5000);
console.log('welcome user');