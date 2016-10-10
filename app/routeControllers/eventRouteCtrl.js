const events = [
			{
				name : "BasketBall",
				slug : "basketball",
				description : "Throwing into a basket."
			},
			{
				name : "Swimming",
				slug : "swimming",
				description : "Micheal Phelps is the fastest swimmer."
			},
			{
				name : "Weightlifting",
				slug : "weightlifting",
				description : "Lifting heavy things up."
			}
		];

module.exports = {
	all : (req,res) => {
		res.render('pages/events',{ events : events });
	},
	single : (req, res) => {
		var slug = req.params.slug,
			event = {};
		events.forEach( (value, index) => {
			if(value.slug == slug){
				event = value; 
				return;
			}
		});

		res.render('pages/single', { event : event });
	}
};