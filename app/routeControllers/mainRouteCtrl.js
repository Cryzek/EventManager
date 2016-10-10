/*
	Overview of the file:
	mainRouteCtrl.js provides functions to be used on different routes.	
*/

module.exports = {
	showHome : (req, res) => {
		// ejs will look for pages in the views folder.(by default)
		res.render('pages/home');
	}
}