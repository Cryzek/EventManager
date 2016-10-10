/*
	Overview of the file:
	server.js is concerned with the configuration of the server.
	Routes are imported from routes.js
*/

/*Load environment variables*/
require('dotenv').config();

const express = require('express'),
	  app = express(),
	  expressLayouts = require('express-ejs-layouts'),
	  mongoose = require('mongoose'),
	  PORT = process.env.port || 8000;

mongoose.connect(process.env.DBURI);

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