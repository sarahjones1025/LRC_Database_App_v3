var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

	app.get('/',function(req,res){
        res.render('index.html');
     });
	app.get('/index.html',function(req,res){
        res.render('index.html');
     });
     app.get('/ags.html',function(req,res){
        res.render('ags.html');
    });
     app.get('/fms.html',function(req,res){
        res.render('fms.html');
    });
     app.get('/lesson.html',function(req,res){
        res.render('lesson.html');
    });
     app.get('/ncoa.html',function(req,res){
        res.render('ncoa.html');
    });

     app.get('/data.json',function(req,res) {
        res.send('data.json');
     });

var server = app.listen(3000, function() {
	console.log("We have started our server on port 3000");
});
