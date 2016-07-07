var express = require('express');
var bodyParser = require('body-parser');
// making an instance of express
var app = express();
// app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.send('Working');
});

app.listen(process.env.PORT || 3000, function () {
	console.log('now it works');
});
