import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tournaments } from '../../lib/tournament.js';
import { Players } from '../../lib/player.js';

Template.tournament.helpers({
	tournament: (id)=> {
		let tournament = Tournaments.find({_id: id}).fetch();

		if(tournament.length !== 0) {
			console.log(tournament);

			let players = tournament[0].players;

var dtstring = tournament[0].date.getFullYear()
    + '-' + (tournament[0].date.getMonth()+1)
    + '-' + (tournament[0].date.getDate())
    + ' ' + (tournament[0].date.getHours())
    + ':' + (tournament[0].date.getMinutes())
    + ':' + (tournament[0].date.getSeconds());

			let playersArray = [];

			for(let i in players) {

				let singlePlayer = Players.find({_id: players[i]}).fetch();

				playersArray.push(singlePlayer[0]);
			}

			tournament[0].players = playersArray;

			console.log(tournament);	

			return tournament;

		} else {
			return [];
		}
	}
});

Template.tournament.onCreated(() => {
	Meteor.subscribe('players');
	Meteor.subscribe('tournaments');
});