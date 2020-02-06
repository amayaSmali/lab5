var data = require("../data.json");




exports.addFriend = function(request, response) {    
	// Your code goes here
	var findname = request.query.name;
	var finddescription = request.query.description; 

	var friendplus = {
		"name": findname,
		"description": finddescription,
		"imageURL": "http://lorempixel.com/400/400/people",
		

	};
	data.friends.push(friendplus);
	response.render('index', data);
	
	
	
 }
