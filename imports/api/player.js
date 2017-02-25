import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Tournaments } from '../../lib/tournament.js';
import { Profiles } from '../../lib/profile.js';
import { Players } from '../../lib/player.js';

if(Meteor.isServer) {
    Meteor.publish('players', function playersPublication() {
        return Players.find();
    });
}

Meteor.methods({
    'players.createPlayer'(name) {
        if(Meteor.user()) {

            Players.insert({name: name});

        }
    },

    'players.updateElo'(playerId, newElo) {
        if(Meteor.user()) {

            Players.update(id, {$set: {elo: newElo}});

        }
    }
});
