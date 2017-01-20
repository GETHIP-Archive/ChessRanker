import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

//@TODO add check statements on each API call

import { Tournaments } from '../../lib/tournament.js';
import { Profiles } from '../../lib/profile.js';
import { Players } from '../../lib/player.js';

let unauthorizedMessage = 'User not logged in';

if(Meteor.isServer) {
    Meteor.publish('tournaments', function tournamentsPublication() {
        return Tournaments.find();
    });
}

Meteor.methods({
    'tournament.createTournament'(name, players) { //String name, array players

        if(Meteor.user()) {

            Tournaments.insert({name: name, players: players});

        } else {
            throw new Error(unauthorizedMessage);
        }
    },
    'tournament.addPlayers'(tournamentId, newPlayerId) { //string tournamentId, new player
        if(Meteor.user()) {

            let currentTournament = Tournaments.find({_id: tournamentId}).fetch();

            currentTournament.players.push(newPlayerId);

            Tournaments.update(tournamentId, {$set: { players: currentTournament}});

        } else {
            throw new Error(unauthorizedMessage);
        }
    },
    'tournament.removePlayer'(tournamentId, playerId) { //String tournamentId, string playerId
        if(Meteor.user()) {

            let tournament = Tournaments.find({_id: tournamentId}).fetch();

            let playerIndex = tournament.players.indexOf(playerId);

            tournament.players.splice(playerIndex, 1);

            Tournaments.update(tournamentId, {$set: { players: tournament.players}});

        } else {
            throw new Error(unauthorizedMessage);
        }
    },
    'tournament.updateScore'(playerScoreplayerScoreData) { //[{playerId, score}, {playerid, score}]
        if(Meteor.user()) {

            Players.update(playerScoreData[0].playerId, {$set: {elo: playerScoreData[0].score}});

            Players.update(playerScoreData[1].playerId, {$set: {elo: playerScoreData[1].score}});

        } else {
            throw new Error(unauthorizedMessage);
        }
    },
    'tournament.finishGame'(gameId) {
        if(Meteor.user()) {
            Tournaments.update(gameId, {$inc: {completed: true}});
        } else {
            throw new Error(unauthorizedMessage);
        }
    }
});
