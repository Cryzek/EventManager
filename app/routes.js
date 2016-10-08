/*One place for all our routes.*/

const express = require('express');
/*Funny naming convention. Hehe*/
var thisWill = require('./routeControllers/mainRouteCtrl');



var router = express.Router();
/*export the router variable.*/
module.exports  = router; 

/*Set up the routes on the router.*/
router.get('/', thisWill.showHome);
