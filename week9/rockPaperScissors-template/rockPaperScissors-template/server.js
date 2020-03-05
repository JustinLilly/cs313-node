const express = require('express');

var gameEngine = require('./gameEngine.js');

var app = express();

app.set('port', process.env.PORT || 5000)
    // set up diretory for static files
    .use(express.static(__dirname + '/public'))
    // set where dynamic views will be stored
    .set('views', __dirname + '/views')
    //set default view engine
    .set ('view engine', 'ejs')
    // call functions when trying to play a game
    .get('/game', gameEngine.playGame)
    //set up default route and content
    .get('/', function(req, res){
        res.sendFile('form.html', { root: __dirname + "/public"});
    })
  // run localhost
  .listen(app.get('port'), function() {
  	console.log('Listening on port: ' + app.get('port'));
  });




  // 1. npm init 
  // 2. npm install 
  // 3. heroku create 
  // 4. git init 
  // 5. git remote add
  // 6. git add 
  // 7. git commit 
  // 8. git push 
  // 9. heroku open