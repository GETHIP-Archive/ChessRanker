import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tournaments } from '../../lib/tournament.js';

Template.tournament.onCreated(function() {
    Meteor.subscribe("tournaments");
});

Template.tournament.helpers({
	tournament: (id)=> {
		return Tournaments.find({_id: id}).fetch();
	}
});