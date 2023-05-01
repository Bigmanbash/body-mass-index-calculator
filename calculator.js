
const express = require('express');
const bodyParser = require('body-Parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    
})

app.get('/bmiCalculator', function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmiCalculator.html', function(req, res){
    
    var numA = Number(req.body.weight);
    var numB = Number(req.body.height);
    var bmi = Math.floor(numA / (numB * numB));

    res.send('Your body mass index is ' + bmi);
})


app.post('/', function(req, res){
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send('The result is ' + result);
})

app.listen(3000, function(){
    console.log('server started on port 3000');
});