const EventModel = require('../models/events');

module.exports = {
	showAll : showAll,
	showSingle : showSingle,
	addEvent : addEvent
};

function showAll(req,res){
	/*get all events*/
	EventModel.find((err, events) => {
		if(err){
			res.send("Unable to find events.");
		}
		else{
			res.render('pages/events',{ events : events });
		}
	});	

};

function showSingle(req, res){
	var slug = req.params.slug;

	EventModel.findOne({ slug : slug } ,(err, event) => {
		if(err){
			res.send("Event Not Found");
		}
		else{
			res.render('pages/single', {event : event});
		}
	});	
};

function addEvent(req, res){
	/*create some events*/
	const events = [
		{
			name : "BasketBall",
			description : "Throwing into a basket."
		},
		{
			name : "Swimming",
			description : "Micheal Phelps is the fastest swimmer."
		},
		{
			name : "Weightlifting",
			description : "Lifting heavy things up."
		}
	];

	/*use the Event model to insert/save*/
	for(event of events){
		var newEvent = new EventModel(event);
		newEvent.save();
	}

	res.send("Added events");
}