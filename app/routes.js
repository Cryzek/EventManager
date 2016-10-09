/*
	Overview of the file:
	routes.js is concerned with the setting up the routes.
	Functionnality on different routes are imported from routes.js
*/

const express = require('express');
/*Funny naming convention. Hehe*/
var thisWillShowMain = require('./routeControllers/mainRouteCtrl'),
	thisWiilShowEvents = require('./routeControllers/eventRouteCtrl');

var router = express.Router();
/*export the router variable.*/
module.exports  = router; 

/*Set up the routes on the router.*/
router.get('/', thisWillShowMain.home);

router.get('/events', thisWiilShowEvents.events);
