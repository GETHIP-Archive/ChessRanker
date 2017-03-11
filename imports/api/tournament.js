import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { eloRank } from 'elo-rank';

//@TODO add check statements on each API calln

import { Tournaments } from '../../lib/tournament.js';
import { Profiles } from '../../lib/profile.js';
import { Players } from '../../lib/player.js';

const unauthorizedMessage = 'User not logged in';

if(Meteor.isServer) {
    Meteor.publish('tournaments', function tournamentsPublication() {
        return Tournaments.find();
    });
}

Meteor.methods({
    'tournament.createTournament'(name, location, date, callback) { //String name, array players

        if(Meteor.user()) {

            Tournaments.insert({name: name, location: location, date: date, user: Meteor.userId(), players: []});

        } else {
            throw new Error(unauthorizedMessage);
        }
    },
    'tournament.addPlayers'(tournamentId, newPlayerId) { //string tournamentId, new player
        if(Meteor.user()) {

            let currentTournament = Tournaments.findOne({_id: tournamentId});

            console.log(newPlayerId);

            currentTournament.players.push(newPlayerId);

            Tournaments.update(tournamentId, {$set: { players: currentTournament.players}});

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
    'tournament.updateScore'(player1, player2, winner) { //[{playerId, score}, {playerid, score}]
        if(Meteor.user()) {

            console.log(player1, player2, winner);

            let player1 = Players.findOne({_id: player1});
            let player2 = Players.findOne({_id: player2});

            ranking = eloRank(player1.elo);

            let player1ExpectedScore = ranking.getExpected(player1.elo, player2.elo);
            let player2ExpectedScore = ranking.getExpected(player2.elo, player1.elo);

            if(winner === player1) {
                let player1NewElo = ranking.updateRating(player1ExpectedScore, 1, player1.elo);
                let player2NewElo = ranking.updateRating(player2ExpectedScore, 0, player2.elo);
            } else {
                let player1NewElo = ranking.updateRating(player1ExpectedScore, 0, player1.elo);
                let player2NewElo = ranking.updateRating(player2ExpectedScore, 1, player2.elo);
            }

            Players.update(player1, {$set: {elo: player1NewElo}});
            Players.update(player2, {$set: {elo: player2NewElo}});

            if(player1.history.length > 10 && player1.kFactor === 30) {
                Players.update(player1._id, {$set: {kFactor: 15}});
            } else if(player1.history.length > 20 && player1.kFactor === 15) {
                Players.update(player1._id, {$set: {kFactor: 10}});
            }

            if(player2.history.length > 10 && player2.kFactor === 30) {
                Players.update(player2._id, {$set: {kFactor: 15}});
            } else if(player2.history.length > 20 && player2.kFactor === 15) {
                Players.update(player2._id, {$set: {kFactor: 10}});
            }

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
