/*
	Overview of the file:
	routes.js is concerned with the setting up the routes.
	Functionnality on different routes are imported from routes.js
*/

const express = require('express');
/*Funny naming convention. Hehe*/
var home = require('./routeControllers/mainRouteCtrl'),
	events = require('./routeControllers/eventRouteCtrl');

var router = express.Router();
/*export the router variable.*/
module.exports  = router; 

/*Set up the routes on the router.*/
router.get('/', home.showHome);

/*show events*/
router.get('/events', events.showAll);

/*add events*/
router.get('/events/add', events.addEvent);

/*show a single event*/
router.get('/events/:slug', events.showSingle);