
var SpidyDB = require('./lib');

var db = new SpidyDB('./db');

db.activity.iterate(function(i, data) {
	console.log(data);
});

console.log('-------------------');

db.activity.save({ name:'New 4'});
db.activity.save({ name:'New 5'});

console.log('-------------------');

db.activity.iterate(function(i, data) {
	console.log(data);
});

console.log('REmove-------------------');

db.activity.delete(4);

db.activity.iterate(function(i, data) {
	console.log(data);
});
