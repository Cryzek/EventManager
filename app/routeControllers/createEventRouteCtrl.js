const EventModel = require('../models/events');

module.exports = {
	renderForm : renderForm,
	addEvent : addEvent
}

function renderForm(req, res){
	res.render('pages/createEvent');
};

function addEvent(req, res){
	var newEvent = {
		name : req.body.name,
		description : req.body.description
	};
	console.log(newEvent);
	newEvent = new EventModel(newEvent);
	console.log(newEvent);
	newEvent.save();
	res.redirect('/events');
}