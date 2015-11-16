var fs = require('fs');

function Schema(schemaFile) {
	this.file = '';
	
	this.setup = function(schemaFile) {
		this.file = schemaFile;
		this.data = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));
	};

	this.persist = function() {
		fs.writeFileSync(this.file, 
			JSON.stringify(this.data));
	}

	this.getAll = function() {
		return this.data;
	};

	this.find = function(id) {
		for(item in this.data) {
			if(this.data[item].id == id)
				return this.data[item];
		}
	};

	this.save = function(object) {
		for(i in this.data) {
			if(object.id == this.data[i]) {
				this.data[i] = object;
				return true;
			}		
		}
		this.data.push(object);
	};

	this.remove = function(id) {
		for(i in this.data) {
			if(id == this.data[i].id) {
				this.data.splice(i, 1);
				return true;
			}		
		}
		return false;
	};

	this.iterate = function(fn) {
		for(item in this.data) {
			fn(item, this.data[item]);
		}
	};

	this.setup(schemaFile);
}

module.exports = Schema;