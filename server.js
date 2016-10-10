/*
	Overview of the file:
	server.js is concerned with the configuration of the server.
	Routes are imported from routes.js
*/

/*Load environment variables*/
require('dotenv').config();

const express = require('express'),
	  bodyParser = require('body-parser'),
	  expressSession = require('express-session'), /*Gives us the ability to create sessions in node so that we can store data.*/
	  cookieParser = require('cookie-parser'), /*Gives us the ability to read those sessions that are stored in cookies.*/
	  connectFlash = require('connect-flash'), /* Let us save messages to flash-data (one-time use messages) which we'll display as success/error messages.*/
	  expressLayouts = require('express-ejs-layouts'),
	  mongoose = require('mongoose'),
	  PORT = process.env.port || 8000;

mongoose.connect(process.env.DBURI);

const app = express();
/*serve the static assets*/
app.use(bodyParser.urlencoded({extended : true}) );
// set sessions and cookie parser
app.use(cookieParser());
// app.use(expressSession({
// 	secret: process.env.SECRET, 
// 	cookie: { maxAge: 60000 },
// 	resave: false,    // forces the session to be saved back to the store
// 	saveUninitialized: false  // dont save unmodified
// }));
// app.use(flash());

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