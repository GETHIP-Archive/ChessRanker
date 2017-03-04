import { Meteor } from 'meteor/meteor';
import { Tempalate } from 'meteor/templating';
import { Players } from '../../lib/player.js';
import { Index, MinimongoEngine } from 'meteor/easy:search';

Template.editTournament.helpers({
  playerLists: function() {
	return PlayerLists.find();
  }
});

Template.editTournament.events({
  'submit .new-player': function(event) {
	var title = event.target.title.value;

	PlayerLists.insert({
	   title: title,
	   createdAt: new Date()
	});

	even.target.title.value = "";

	return false;
  }
});

PlayersIndex = new EasySearch.Index({
  collection: Players,
  fields: ['name'],
  engine: new MinimongoEngine({
	/*selector: (searchObject, options, aggregation) => {

	  let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

	  if(selector.name === "") {
		searchObject.name = "dsfadfasdfadsfadsfasdfdsf";
	  }

	  return selector;
	}*/
  })
});

Template.home.onCreated(function() {
  Meteor.subscribe("players");
});

Template.home.helpers({
  playersIndex: () => {
	return PlayersIndex;
  },
  inputAttributes: () => {
	return {
	  placeholder: 'Search for a user',
	  style: 'width: 500px; height: 30px; padding: 5px; display: block;'
	};
  }
});
