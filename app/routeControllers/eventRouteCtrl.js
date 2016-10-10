const EventModel = require('../models/events');

module.exports = {
	showAll : showAll,
	showSingle : showSingle,
	deleteEvent : deleteEvent
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

function deleteEvent(req, res){

}