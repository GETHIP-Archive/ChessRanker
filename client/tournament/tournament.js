import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tournaments } from '../../lib/tournament.js';
import { Players } from '../../lib/player.js';

Template.tournament.helpers({
	tournament: (id)=> {
		let tournament = Tournaments.find({_id: id}).fetch();

		if(tournament.length !== 0) {

			let players = tournament[0].players;

			tournament[0].date = tournament[0].date.getFullYear()
			    + '-' + (tournament[0].date.getMonth()+1)
			    + '-' + (tournament[0].date.getDate());

			let playersArray = [];

			for(let i in players) {

				let singlePlayer = Players.find({_id: players[i]}).fetch();

				playersArray.push(singlePlayer[0]);
			}

			tournament[0].players = playersArray;

			return tournament;

		} else {
			return [];
		}
	},
	isOwner: (id) => {

		let tournament = Tournaments.findOne({_id: id});

		if(Meteor.userId() === tournament.user) {

			return true;

		} else {

			return false;

		}
	}
});

Template.tournament.onCreated(() => {
	Meteor.subscribe('players');
	Meteor.subscribe('tournaments');
});
