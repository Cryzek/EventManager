/*
	Overview of the file:
	server.js is concerned with the configuration of the server.
	Routes are imported from routes.js
*/

const express = require('express'),
	  app = express(),
	  expressLayouts = require('express-ejs-layouts'),
	  PORT = process.env.port || 8000;

/*configure our application*/

/*serve the static assets*/
app.use(express.static(__dirname + '/public') );

/*set ejs as our templating engine*/
app.set('view engine','ejs');
app.use(expressLayouts);

/*
	Get routes from routes.js
*/
var router = require('./app/routes.js');
app.use(router);

app.listen(PORT, function(){
	console.log("Listening on port " + PORT);
});