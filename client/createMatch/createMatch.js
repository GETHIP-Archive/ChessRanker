import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Tournaments } from '../../lib/tournament.js';
import { Players } from '../../lib/player.js';

Template.createMatch.onCreated(() => {
	Meteor.subscribe('players');
	Meteor.subscribe('tournaments');
})

Template.createMatch.helpers({
	allPlayers: (tId) => {

		let tournament = Tournaments.findOne({_id: tId});

		let playersToReturn = [];

		for(let i in tournament.players) {

			playersToReturn.push(Players.findOne({_id: tournament.players[i]}));

		}

		return playersToReturn;

	}
});

Template.createMatch.events({
	'click .goBackBtn': (event) => {

		event.preventDefault();

		const id = window.location.href.match(/creatematch\/(.*)/)[1];

		FlowRouter.go("/tournament/" + id);

	},
	'submit .addBtn': (event) => {

		event.preventDefault();

		let player1 = $("#player1 option:selected").text();
		let player2 = $("#player2 option:selected").text();

		console.log(player1, player2);

	},
	'click .addBtn': (event) => {

		event.preventDefault();

		console.log($("#player1 option:selected").text());

		let player1 = Players.findOne({name: $("#player1 option:selected").text()})._id;
		let player2 = Players.findOne({name: $("#player2 option:selected").text()})._id;

		let result1 = document.getElementById('result1').checked;
		let result2 = document.getElementById('result2').checked;

		console.log(player1, player2);

		if(result1) {

			Meteor.call('tournament.updateScore', player1, player2, player1);

		} else {

			Meteor.call('tournament.updateScore', player1, player2, player2);

		}

	}
})