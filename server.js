var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8000, function () {
	console.log('app listening on port 8000');
});
