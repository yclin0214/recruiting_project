var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/account_db');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectID;

var accountSchema = new Schema(
{
	email: {
		type: String
	},

	password: {
		type: String
	}
})

var accountModel = mongoose.model('accountModel', accountSchema);

var save_data = function(_email, _password){
	var new_user = new accountModel({email: _email, password: _password});
	new_user.save(function(err){
		console.log("saving new user");
		console.log("error output is " + err);
	});
}

module.exports.create_user = save_data;