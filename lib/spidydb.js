var fs = require('fs');
var Schema = require('./schema');

function SpidyDB(databaseFolder) {
	this.schemas = {};

	this.setup = function(databaseFolder) {
		var files = fs.readdirSync(databaseFolder);
		for(i in files) {
			this.addSchema(
				files[i].substring(0, files[i].indexOf('.')), 
				databaseFolder + '/' + files[i]);
		}
	};

	this.addSchema = function(schemaName, schemaFile) {
		var schema = new Schema(schemaFile);
		this.schemas[schemaName] = schema;
		this[schemaName] = schema;
	};

	this.persist = function() {
		for(schema in this.schemas) {
			schemas[schema].persist();
		}
	};

	this.iterate = function(fn) {
		for(item in this.schemas) {
			fn(item, this.schemas[item]);
		}
	};

	//Settup Database
	this.setup(databaseFolder);
}

module.exports = SpidyDB;