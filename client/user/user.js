import { Template } from 'meteor/templating';
import { Profiles } from '../../lib/profile.js';
import { Tournaments } from '../../lib/tournament.js';

Template.user.helpers({
	profiles: (username) => {

		return Profiles.find({username: username}).fetch();

	},
	tournaments: (username) => {

		return Tournaments.find({user: username}).fetch();

	}
});

Template.user.onCreated(() => {
	Meteor.subscribe('profiles');
	Meteor.subscribe('tournaments');
})