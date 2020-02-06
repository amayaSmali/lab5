// Get all of our friend data
var data = require('../data.json');
// response.render('index',data)


exports.view = function(request, response){
	console.log(data);
	response.render('index', data);
};
