import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";

import { Tournaments } from "../../lib/tournament.js";

Template.createTournament.onCreated(() => {
	Meteor.subscribe("tournaments");
})

Template.createTournament.events({

	'submit .createTournamentForm'(e) {

		e.preventDefault();

		const target = e.target;

		const name = document.getElementById('createTournamentName').value;
		const place = document.getElementById('createTournamentPlace').value;
		const date = new Date(document.getElementById('createTournamentDate').value);

		Meteor.call('tournament.createTournament', name, place, date, (id) => {

			const tournament = Tournaments.findOne({name: name});

			FlowRouter.go("/tournament/" + tournament._id);

		});
	}

});