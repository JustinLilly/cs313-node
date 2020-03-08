const express = require('express');

var mathEngine = require('./mathEngine.js');

var app = express();

app.set('port', process.env.PORT || 8888)
    .use(express.static(__dirname + '/public'))
    .set('views', __dirname + '/views')
    .set('view engine', 'ejs')
    .get('/math', mathEngine.doMaths)
    .get('/', function(req, res){
        res.sendFile('form.html', { root: __dirname + "/public"});
    })
    .listen(app.get('port'), function() {
        console.log('Listening on port: ' + app.get('port'));
    });
