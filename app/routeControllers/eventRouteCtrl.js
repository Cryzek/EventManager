
module.exports = {
	events : (req,res) => {
		/*create dummy events*/
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
		]
        
		res.render('pages/events',{ events : events });
	}	
};