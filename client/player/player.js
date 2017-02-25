import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Players } from '../../lib/player.js';

Template.playerPage.helpers({
    player: (playerName) => {

        let results = Players.find({name: playerName}).fetch();

        return results;

    }
});

Template.playerPage.onCreated(function() {
	Meteor.subscribe('players');
})
