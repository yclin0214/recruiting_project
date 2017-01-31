var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../models/users');

router.get('/', function(req, res, next) {
  res.render('registration', { title: 'Register here' });
});

router.post('/', function(req, res, next){
	//data validation
	var email = req.body.email;
	var password = req.body.password;
	if (email && password){
		userModel.create_user(email, password);
	}
	console.log(email);
	console.log(password);

	//database connection

	res.send("good jobs");
});

module.exports = router;