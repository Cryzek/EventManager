const express = require('express');

var PORT = process.env.port || 8000;

var app = express();

/*
	Routes
	Get routes from routes.js
*/
var router = require('./app/routes.js');
app.use(router);

app.listen(PORT, function(){
	console.log("Listening on port " + PORT);
});
