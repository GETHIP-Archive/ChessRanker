import { Meteor } from 'meteor/meteor';
import { Tempalate } from 'meteor/templating';
import { Players } from '../../lib/player.js';
import { Tournaments } from '../../lib/tournament.js';
import { Index, MinimongoEngine } from 'meteor/easy:search';

Template.editTournament.helpers({
	playerLists: function() {
		return Players.find();
	}
});

Template.editTournament.events({

	'submit .editTournamentForm': function(event) {

		event.preventDefault();

		const id = window.location.href.match(/edit\/(.*)/)[1];

		FlowRouter.go("/tournament/" + id);

	},

	'click .playerItemInSearchList': function(event) {

		event.preventDefault();

		const id = window.location.href.match(/edit\/(.*)/)[1];

		let player = Players.findOne({name: event.target.innerHTML});

		let tournament = Tournaments.findOne({_id: id});

		let counter = 0;

		for(let i in tournament.players) {

			if(tournament.players[i] != player._id) {
				counter++;
			}

		}

		if(counter == tournament.players.length) {

			Meteor.call('tournament.addPlayers', id, player._id);

		}

	}

});

PlayersIndex = new EasySearch.Index({
	collection: Players,
	fields: ['name'],
	engine: new MinimongoEngine()
});

Template.editTournament.onCreated(function() {
	Meteor.subscribe("players");
	Meteor.subscribe("tournaments");
});

Template.editTournament.helpers({

	playersIndex: () => {
		return PlayersIndex;
	},

	playersInTournament: () => {

		const id = window.location.href.match(/edit\/(.*)/)[1];

		let tournament = Tournaments.findOne({_id: id});

		PlayersToReturn = [];

		for(let i in tournament.players) {

			PlayersToReturn.push(Players.findOne({_id: tournament.players[i]}));

		}

		return PlayersToReturn;

	},

	inputAttributes: () => {
		return {
			placeholder: 'Search for a player',
			style: 'width: 500px; height: 30px; padding: 5px; display: block;'
		};
	}

});
