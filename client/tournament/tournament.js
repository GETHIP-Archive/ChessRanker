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

var dtstring = dt.getFullYear()
    + '-' + pad2(tournament.getMonth()+1)
    + '-' + pad2(dt.getDate())
    + ' ' + pad2(dt.getHours())
    + ':' + pad2(dt.getMinutes())
    + ':' + pad2(dt.getSeconds());

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