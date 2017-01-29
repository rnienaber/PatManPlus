var path = require('path'),
	mkdirp = require('mkdirp'),
	JsonSource = require('./json_source')
 	fs = require('fs');

module.exports = {

	consultants: {},

	patients: {},

	wards: {},

	teams: {},

	initialize: function(shared_folder) {

		if (!fs.existsSync(shared_folder)) {
			mkdirp.sync(shared_folder);
		}

		this.patients = require('./patients');
		this.patients.initialize(path.join(shared_folder, 'patients.sqlite3'));

		var consultants_file = path.join(shared_folder, 'consultants.json');
		this.consultants = new JsonSource(consultants_file);

		var wards_file = path.join(shared_folder, 'wards.json');
		this.wards = new JsonSource(wards_file);

		var teams_file = path.join(shared_folder, 'teams.json');
		this.teams = new JsonSource(teams_file);
	}
}