/*
	Overview of the file:
	routes.js is concerned with the setting up the routes.
	Functionnality on different routes are imported from routes.js
*/

const express = require('express');
/*Funny naming convention. Hehe*/
var home = require('./routeControllers/mainRouteCtrl'),
	events = require('./routeControllers/eventRouteCtrl'),
	createEvent = require('./routeControllers/createEventRouteCtrl');

var router = express.Router();
/*export the router variable.*/
module.exports  = router; 

/*Set up the routes on the router.*/
router.get('/', home.showHome);

/*show events*/
router.get('/events', events.showAll);

/*show a single event*/
router.get('/events/:slug', events.showSingle);

/*sending the form*/
router.get('/createEventForm', createEvent.renderForm);

/*create an event*/
router.post('/events/add', createEvent.addEvent);