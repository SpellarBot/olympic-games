'use strict';

var mongo = require('mongodb');
var client = mongo.MongoClient;
var _db;


module.exports = {
	connect() {
		client.connect('mongodb://localhost:27017/olympics-dev', (err, db) => {
	 if (err) {  
	 	console.log("\n !Error! connecting to Mongo \n");
		process.exit(1);
	}
	_db = db;
	console.log("\n Connected to Mongo \n");
	});
   },
   sports(){
   		return _db.collection("sports");
   }
}
// Changed localhost to 127.1.1 -- if I see error, change it back to localhost;
// Remember to restart Mongo whenever we make a change in Endpoints